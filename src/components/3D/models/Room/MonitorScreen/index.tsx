import { useEffect, useRef } from 'react';
import { Group, Mesh, Vector3 } from 'three';
import { useThree } from '@react-three/fiber';
import { useSpring } from '@react-spring/web';
import { Html } from '@react-three/drei';
import { SectionTitle } from '@/types/enums/SectionTitle';
import useSectionDetection from '@/hooks/useSectionDetection';
import useObjectFocus from '@/hooks/useObjectFocus';
import use3DSceneStore from '@/store/use3DSceneStore';
import {
  MonitorScreenCloseButton,
  MonitorScreenContainer,
  MonitorScreenTitleBar,
  MonitorScreenWebview,
} from './style';
import CloseIcon from '@/assets/icons/close.svg';
import { ProjectsSection } from '@/store/use3DSceneStore/types';

/**
 * Component for rendering monitor screen of the PC inside the room
 */
const MonitorScreen = () => {
  // Mesh of monitor screen part of PC model
  const monitorScreenRef = useRef<Mesh>();
  // Html which would float over the actual monitor screen mesh to look as if it is screen
  const floatingScreenRef = useRef<Group>(null!);
  const { focusOnObject } = useObjectFocus();

  const { monitorScreenUrl, closeMonitor } = use3DSceneStore(
    state => state.currentSection,
  ) as ProjectsSection;
  const { scene } = useThree();

  // Animation imitating screen turn on-off effect
  const { opacity, transform } = useSpring({
    opacity: monitorScreenUrl ? 1 : 0,
    transform: monitorScreenUrl ? 'scale(1)' : 'scale(0.7)',
  });

  /**
   * Callback when the user enters projects section
   */
  const onEnterProjectsSection = () => {
    if (!floatingScreenRef.current) return;

    // Put some distance between target and camera for better viewing
    const OFFSET_VECTOR = new Vector3(0.6, 0, 0);

    focusOnObject(floatingScreenRef.current, OFFSET_VECTOR);
  };

  useSectionDetection(SectionTitle.Projects, onEnterProjectsSection);

  /**
   * Callback function for monitor screen close button click event
   */
  const onMonitorCloseButtonClick = () => {
    if (closeMonitor) closeMonitor();
  };

  useEffect(() => {
    let monitorScreen: Mesh;
    scene.traverse(object => {
      if (object.name === 'MonitorScreen') {
        monitorScreen = object as Mesh;
      }
    });

    // Attach Html screen to monitor screen mesh
    monitorScreen.add(floatingScreenRef.current);
    monitorScreenRef.current = monitorScreen;
  }, []);

  return (
    <group ref={floatingScreenRef}>
      <Html transform scale={[0.027, 0.0444, 1]}>
        <MonitorScreenContainer
          style={{
            opacity,
            transform,
          }}>
          <MonitorScreenTitleBar>
            <MonitorScreenCloseButton onClick={onMonitorCloseButtonClick}>
              <CloseIcon />
            </MonitorScreenCloseButton>
          </MonitorScreenTitleBar>
          <MonitorScreenWebview title="Project" src={monitorScreenUrl} />
        </MonitorScreenContainer>
      </Html>
    </group>
  );
};

export default MonitorScreen;

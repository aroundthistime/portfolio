import { useEffect, useRef } from 'react';
import { Euler, Group, Mesh, Vector3 } from 'three';
import { useThree } from '@react-three/fiber';
import { animated, useSpring } from '@react-spring/web';
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

/**
 * Component for rendering monitor screen of the PC inside the room
 */
const MonitorScreen = () => {
  // Mesh of monitor screen part of PC model
  const monitorScreenRef = useRef<Mesh>();
  // Html which would float over the actual monitor screen mesh to look as if it is screen
  const floatingScreenRef = useRef<Group>(null!);
  const { getObjectCenterPoint, focusOnObject } = useObjectFocus();
  const monitorScreenUrl = use3DSceneStore(state => state.monitorScreenUrl);
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
    if (!monitorScreenRef.current) return;

    const monitorScreenCenterPoint = getObjectCenterPoint(
      monitorScreenRef.current,
    );

    // Put screen html slightly on top of monitor to avoid z-fighting
    floatingScreenRef.current.position.set(
      monitorScreenCenterPoint.x,
      monitorScreenCenterPoint.y,
      monitorScreenCenterPoint.z - 0.01,
    );

    // Put some distance between target and camera for better viewing
    const OFFSET_VECTOR = new Vector3(0.5, 0, 0);

    focusOnObject(floatingScreenRef.current, OFFSET_VECTOR);
  };

  useSectionDetection(SectionTitle.Projects, onEnterProjectsSection);

  /**
   * Callback function for monitor screen close button click event
   */
  const onMonitorCloseButtonClick = () => {
    use3DSceneStore.getState().closeMonitor();
  };

  useEffect(() => {
    scene.traverse(object => {
      if (object.name === 'PC_1_Cube.021_Screen') {
        monitorScreenRef.current = object as Mesh;
      }
    });
  }, []);

  return (
    <group ref={floatingScreenRef}>
      <Html
        transform
        occlude
        rotation={new Euler(0, Math.PI, 0)}
        scale={0.0292}>
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

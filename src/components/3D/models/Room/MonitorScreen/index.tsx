import { useEffect, useRef } from 'react';
import { Group, Mesh, Vector3 } from 'three';
import { useThree } from '@react-three/fiber';
import { useSpring } from '@react-spring/web';
import { Html } from '@react-three/drei';
import { useRouter } from 'next/router';
import { SectionTitle } from '@/types/enums/SectionTitle';
import useSectionDetection from '@/hooks/useSectionDetection';
import useObjectFocus from '@/hooks/useObjectFocus';
import use3DSceneStore from '@/store/use3DSceneStore';
import {
  MonitorScreenButton,
  MonitorScreenContainer,
  MonitorScreenTitleBar,
  MonitorScreenWebview,
} from './style';
import CloseIcon from '@/assets/icons/close.svg';
import ExpandIcon from '@/assets/icons/expand.svg';
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
  const { locale } = useRouter();

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
   * Callback function for monitor screen expand button click event
   */
  const onMonitorExpandButtonClick = () => {
    if (!monitorScreenUrl) return;
    window.open(getMonitorScreenUrlWithLocale(), '_blank');
  };

  /**
   * Callback function for monitor screen close button click event
   */
  const onMonitorCloseButtonClick = () => {
    if (closeMonitor) closeMonitor();
  };

  /**
   * Get monitor screen URL with current locale applied
   */
  const getMonitorScreenUrlWithLocale = () => {
    return `/${locale}${monitorScreenUrl}`;
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
            <MonitorScreenButton
              onClick={onMonitorExpandButtonClick}
              $buttonColor="#28C841">
              <ExpandIcon />
            </MonitorScreenButton>
            <MonitorScreenButton
              onClick={onMonitorCloseButtonClick}
              $buttonColor="#ff6057">
              <CloseIcon />
            </MonitorScreenButton>
          </MonitorScreenTitleBar>
          {monitorScreenUrl && (
            <MonitorScreenWebview
              title="Project"
              src={getMonitorScreenUrlWithLocale()}
            />
          )}
        </MonitorScreenContainer>
      </Html>
    </group>
  );
};

export default MonitorScreen;

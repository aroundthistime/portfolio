import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Euler, Group, Mesh, Vector3 } from 'three';
import { SectionTitle } from '@/types/enums/SectionTitle';
import useSectionDetection from '@/hooks/useSectionDetection';
import use3DSceneStore from '@/store/use3DSceneStore';

const MonitorScreen = () => {
  const monitorScreenRef = useRef<Mesh>();
  const containerGroupRef = useRef<Group>(null!);
  const { scene } = useThree();

  /**
   * Callback when the user enters projects section
   */
  const onEnterProjectsSection = () => {
    if (!monitorScreenRef.current) return;

    monitorScreenRef.current.geometry.computeBoundingSphere();
    const monitorScreenPosition = monitorScreenRef.current.geometry
      .boundingSphere.center as Vector3;

    // Put screen html slightly on top of monitor to avoid layer fighting
    containerGroupRef.current.position.set(
      monitorScreenPosition.x,
      monitorScreenPosition.y,
      monitorScreenPosition.z - 0.01,
    );

    const monitorScreenWorldPosition =
      containerGroupRef.current.getWorldPosition(new Vector3());

    // Put some distance between target and camera for better viewing
    const OFFSET_VECTOR = new Vector3(1, 0, 0);
    const cameraPosition = new Vector3().addVectors(
      monitorScreenWorldPosition,
      OFFSET_VECTOR,
    );

    use3DSceneStore.setState({
      camera: {
        position: cameraPosition,
        target: monitorScreenWorldPosition,
      },
    });
  };

  useSectionDetection(SectionTitle.Projects, onEnterProjectsSection);

  useEffect(() => {
    scene.traverse(object => {
      if (object.name === 'PC_1_Cube.021_Screen') {
        monitorScreenRef.current = object as Mesh;
      }
    });
  }, []);

  return (
    <group ref={containerGroupRef}>
      <Html transform occlude rotation={new Euler(0, Math.PI, 0)}>
        모니터
      </Html>
    </group>
  );
};

export default MonitorScreen;

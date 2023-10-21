import React, { useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas, extend, useThree } from '@react-three/fiber';
import { Color, NoToneMapping, Vector3 } from 'three';
import { TextGeometry } from 'three-stdlib';
import Bart from '@/components/models/Bart';
import Room from '@/components/models/Room';
import Cat from '@/components/models/Cat';
import WallClock from '@/components/models/WallClock';

extend({ TextGeometry });

/**
 * Component rendering the 3D scene part of the portfolio
 */
const ThreeDScene = () => {
  return (
    <Canvas
      style={{ width: '50dvw', height: '100dvh', backgroundColor: 'pink' }}
      gl={{ toneMapping: NoToneMapping }}
      scene={{ background: new Color('#A6C5F7') }}>
      <OrbitControls zoomSpeed={5} />
      <ThreeDSceneContents />
      <directionalLight position={new Vector3(-30, 10, 10)} />
      <ambientLight intensity={0.1} />
    </Canvas>
  );
};

/**
 * Actual contents of the 3D scene.
 * A separate component is required for accessing r3f related properties
 */
const ThreeDSceneContents = () => {
  const { camera } = useThree();
  useEffect(() => {
    // Set initial position of the camera
    camera.position.set(8.5, 10, 8.5);
  }, []);
  return (
    <>
      <Room />
      <Bart />
      <Cat />
      <WallClock />
    </>
  );
};

export default ThreeDScene;

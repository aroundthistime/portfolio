import React, { useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas, extend, useThree } from '@react-three/fiber';
import { Color, NoToneMapping, Vector3 } from 'three';
import { TextGeometry } from 'three-stdlib';
import Bart from '@/components/3D/models/Bart';
import Room from '@/components/3D/models/Room';
import Cat from '@/components/3D/models/Cat';
import WallClock from '@/components/3D/models/WallClock';
import PortfolioContents from '@/components/containers/PortfolioContents';

extend({ TextGeometry });

/**
 * Component rendering the 3D scene part of the portfolio
 */
const ThreeDScene = () => {
  return (
    <div
      style={{
        width: '100dvw',
        height: '100dvh',
        display: 'flex',
        backgroundColor: '#A7C6F8',
      }}>
      <Canvas
        style={{ width: '50dvw', height: '100dvh' }}
        gl={{ toneMapping: NoToneMapping }}
        scene={{ background: new Color('#A6C5F7') }}>
        <OrbitControls enablePan={false} enableZoom={false} />
        <ThreeDSceneContents />
        <directionalLight position={new Vector3(-30, 10, 10)} />
        <ambientLight intensity={0.1} />
      </Canvas>
      <PortfolioContents />
    </div>
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

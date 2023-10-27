import React, { useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { Color, NoToneMapping, Vector3 } from 'three';
import { TextGeometry } from 'three-stdlib';
import TWEEN from '@tweenjs/tween.js';
import Bart from '@/components/3D/models/Bart';
import Room from '@/components/3D/models/Room';
import Cat from '@/components/3D/models/Cat';
import WallClock from '@/components/3D/models/WallClock';
import PortfolioContents from '@/components/containers/PortfolioContents';
import useCameraStore from '@/components/store/useCameraStore';

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
        backgroundColor: 'orange',
      }}>
      <Canvas
        style={{
          width: '100dvw',
          height: '100dvh',
          position: 'absolute',
          top: '0px',
          left: '0px',
        }}
        gl={{ toneMapping: NoToneMapping }}
        scene={{ background: new Color('#A6C5F7') }}>
        <OrbitControls />
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

  /**
   * Update camera with new position and target to look at.
   * @param {Vector3} newPosition New camera position to be applied
   * @param {Vector3} newTarget New target point that the camera should look at
   */
  const updateCamera = (newPosition: Vector3, newTarget: Vector3) => {
    const position = new Vector3().copy(camera.position);

    // For smoother camera update
    new TWEEN.Tween(position)
      .to(newPosition)
      .easing(TWEEN.Easing.Back.InOut)
      .onUpdate(() => {
        camera.position.set(position.x, position.y, position.z);
      })
      .onComplete(() => {
        camera.lookAt(newTarget);
      })
      .start();
  };

  useFrame(() => {
    TWEEN.update();
  });

  // Manually initialize camera position because subscription is not triggered with initial state
  useEffect(() => {
    const { position } = useCameraStore.getState();
    camera.position.set(position.x, position.y, position.z);

    useCameraStore.subscribe(state => {
      updateCamera(state.position, state.target);
    });
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

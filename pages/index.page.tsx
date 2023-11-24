import React, { useEffect, useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { Color, NoToneMapping, Vector3 } from 'three';
import { TextGeometry } from 'three-stdlib';
import TWEEN from '@tweenjs/tween.js';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Bart from '@/components/3D/models/Bart';
import Room from '@/components/3D/models/Room';
import PortfolioContents from '@/components/containers/PortfolioContents';
import use3DSceneStore from '@/store/use3DSceneStore';
import Loader from '@/components/containers/Loader';
import withSuspenseMinDelaySuspense from '@/components/HOC/withMinDelaySuspense';

extend({ TextGeometry });

/**
 * Component rendering the 3D version of portfolio
 */
const ThreeDPortfolio = () => {
  /**
   * camera.lookAt doesn't work properly when using OrbitControls.
   * The job could instead be achieved with setting the target of the controls
   */
  const [controlTarget, setControlTarget] = useState<Vector3>(new Vector3());

  // How much 3D scene is zoomed
  const [zoom, setZoom] = useState<number>();
  const enableZoom = use3DSceneStore(state => state.enableZoom);
  const enableRotate = use3DSceneStore(state => state.enableRotate);

  useEffect(() => {
    use3DSceneStore.subscribe((state, prev) => {
      // Reset zoom level when changing camera or scene properties to prevent unwanted behaviors
      if (
        state.camera.position !== prev.camera.position ||
        state.camera.target !== prev.camera.target ||
        state.scene.position !== prev.scene.position
      ) {
        setZoom(0);
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>유동환 (Donghwan Yu) Portfolio</title>
        <link rel="shortcut icon" href="/projects/portfolio/logo.jpeg" />
        <meta
          name="description"
          content="3D Portfolio of Donghwan Yu in custom web page"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/projects/portfolio/logo.jpeg" />
      </Head>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: '#ffd299',
        }}>
        <Canvas
          style={{
            position: 'absolute',
            top: '0px',
            left: '0px',
            zIndex: 0,
          }}
          gl={{ toneMapping: NoToneMapping }}
          scene={{ background: new Color('#A6C5F7') }}>
          <OrbitControls
            enablePan={false}
            enableZoom={enableZoom}
            enableRotate={enableRotate}
            zoom0={zoom}
            target={controlTarget}
          />
          <ThreeDSceneContents
            controlTarget={controlTarget}
            setControlTarget={setControlTarget}
          />
          <directionalLight position={new Vector3(-30, 10, 10)} />
          <ambientLight intensity={0.2} />
        </Canvas>
        <PortfolioContents />
      </div>
    </>
  );
};

/**
 * Actual contents of the 3D scene.
 * A separate component is required for accessing r3f related properties
 */
const ThreeDSceneContents = ({
  controlTarget,
  setControlTarget,
}: ThreeDSceneProps) => {
  const { camera, scene } = useThree();

  /**
   * Update camera with new position and target to look at.
   * @param {Vector3} newPosition New camera position to be applied
   * @param {Vector3} newTarget New target point that the camera should look at
   */
  const updateCamera = (newPosition: Vector3, newTarget: Vector3) => {
    const oldPosition = new Vector3().copy(camera.position);

    const cameraProperty = {
      positionX: oldPosition.x,
      positionY: oldPosition.y,
      positionZ: oldPosition.z,
      targetX: controlTarget.x,
      targetY: controlTarget.y,
      targetZ: controlTarget.z,
    };

    const updatedProperty = {
      positionX: newPosition.x,
      positionY: newPosition.y,
      positionZ: newPosition.z,
      targetX: newTarget.x,
      targetY: newTarget.y,
      targetZ: newTarget.z,
    };

    // For smoother camera update
    new TWEEN.Tween(cameraProperty)
      .to(updatedProperty)
      .easing(TWEEN.Easing.Back.InOut)
      .onUpdate(() => {
        const { positionX, positionY, positionZ, targetX, targetY, targetZ } =
          cameraProperty;
        setControlTarget(new Vector3(targetX, targetY, targetZ));
        camera.position.set(positionX, positionY, positionZ);
      })
      .start();
  };

  /**
   * Update root scene with new position
   * @param {Vector3} newPosition New scene position to be applied
   */
  const updateScene = (newPosition: Vector3) => {
    const position = new Vector3().copy(scene.position);

    // For smoother camera update
    new TWEEN.Tween(position)
      .to(newPosition)
      .easing(TWEEN.Easing.Back.InOut)
      .onUpdate(() => {
        scene.position.set(position.x, position.y, position.z);
      })
      .start();
  };

  useFrame(() => {
    TWEEN.update();
  });

  useEffect(() => {
    // Manually initialize camera position because subscription is not triggered with initial state
    const {
      camera: { position: cameraPosition },
    } = use3DSceneStore.getState();
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);

    use3DSceneStore.subscribe((state, prev) => {
      if (
        state.camera.position !== prev.camera.position ||
        state.camera.target !== prev.camera.target
      ) {
        updateCamera(state.camera.position, state.camera.target);
      }
      if (state.scene.position !== prev.scene.position) {
        updateScene(state.scene.position);
      }
    });
  }, []);

  return (
    <>
      <Bart />
      <Room />
    </>
  );
};

interface ThreeDSceneProps {
  /**
   * Current target of orbit controls
   */
  controlTarget: Vector3;

  /**
   * Set target of the orbit controls (which would look like setting target of the camera)
   */
  setControlTarget: React.Dispatch<React.SetStateAction<Vector3>>;
}

export const getStaticProps = (async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['3d', 'common'])),
    },
  };
}) satisfies GetStaticProps;

export default withSuspenseMinDelaySuspense(ThreeDPortfolio, <Loader />, 1000);

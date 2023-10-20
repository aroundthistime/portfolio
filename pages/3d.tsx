import { OrbitControls } from '@react-three/drei';
import { Canvas, extend } from '@react-three/fiber';
import { Color, NoToneMapping, Vector3 } from 'three';
import { TextGeometry } from 'three-stdlib';
import Bart from '@/components/threeD/Bart';

extend({ TextGeometry });

/**
 * Component rendering the 3D scene part of the portfolio
 */
const ThreeDScene = () => {
  return (
    <Canvas
      style={{ width: '90vw', height: '90vh' }}
      gl={{ toneMapping: NoToneMapping }}
      scene={{ background: new Color('#A6C5F7') }}>
      <OrbitControls enablePan enableZoom zoomSpeed={5} />
      <Bart />
      <directionalLight position={new Vector3(-30, 10, 10)} />
      <ambientLight intensity={0.1} />
    </Canvas>
  );
};

export default ThreeDScene;

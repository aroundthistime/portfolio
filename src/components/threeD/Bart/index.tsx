import { extend, useLoader } from '@react-three/fiber';
import { TextureLoader, Vector3 } from 'three';
import SpriteText from 'three-spritetext';

extend({ SpriteText });

const Bart = () => {
  const bartTexture = useLoader(TextureLoader, '/models/bart.png');

  const POSITION = new Vector3(-2, 1.1, 2);
  const SCALE = new Vector3(1.8, 1.8, 1.8);

  return (
    <group>
      <sprite position={POSITION} scale={SCALE}>
        {/* Support transparent background */}
        <spriteMaterial map={bartTexture} alphaTest={0.5} transparent />
      </sprite>
    </group>
  );
};

export default Bart;

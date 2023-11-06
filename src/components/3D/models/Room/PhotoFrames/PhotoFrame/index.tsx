import { Html } from '@react-three/drei';
import { forwardRef } from 'react';
import { Group, Vector3 } from 'three';
import { PhotoFrameImage } from './style';

const PhotoFrame = forwardRef<Group, Props>(({ scale, src, title }, ref) => {
  return (
    // Flip on x axis
    <group ref={ref} scale={new Vector3(-1, 1, 1)}>
      <Html transform occlude scale={scale}>
        <PhotoFrameImage src={src} alt={title} draggable={false} />
      </Html>
    </group>
  );
});

interface Props {
  scale: Vector3;
  src: string;
  title: string;
}

export default PhotoFrame;

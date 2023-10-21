import { useFrame, useLoader } from '@react-three/fiber';
import { AnimationMixer, Vector3 } from 'three';
import { GLTFLoader } from 'three-stdlib';
import { getScaleVector } from '@/utils/threeUtils';

const Cat = () => {
  const loadedCat = useLoader(GLTFLoader, '/models/cat.glb');

  const mixer = new AnimationMixer(loadedCat.scene);

  loadedCat.animations.forEach(animationClip => {
    const action = mixer.clipAction(animationClip);
    action.play();
  });

  useFrame((_, delta) => {
    mixer.update(delta);
  });

  return (
    <primitive
      object={loadedCat.scene}
      scale={getScaleVector(0.0025)}
      position={[2.2, 4.7, -3.197931945323944]}
    />
  );
};

export default Cat;
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three-stdlib';
import { AnimationMixer, MathUtils } from 'three';
import { getScaleVector } from '@/utils/threeUtils';

const WallClock = () => {
  const loadedClock = useLoader(GLTFLoader, '/models/clock.glb');

  const mixer = new AnimationMixer(loadedClock.scene);

  // Animation updating hour and minute hand of the clock
  const clockHandAnimationClip = loadedClock.animations.find(
    clip => clip.name === 'Take 01',
  );

  const action = mixer.clipAction(clockHandAnimationClip);
  action.play();

  // Update the hands of the clock according to the current time
  useFrame(() => {
    const currentTime = new Date();

    // Calculate the number of hours elapsed since midnight
    const hours = (currentTime.getHours() % 12) + currentTime.getMinutes() / 60;

    // Map the hours to the animation duration
    const animationDuration = clockHandAnimationClip.duration;
    const animationTime = (hours / 12) * animationDuration;

    mixer.setTime(animationTime);
  });

  return (
    <primitive
      object={loadedClock.scene}
      scale={getScaleVector(2)}
      rotation={[0, MathUtils.degToRad(90), 0]}
      position={[-4, 4.5, -0.5]}
    />
  );
};

export default WallClock;

import { useFrame } from '@react-three/fiber';
import { AnimationMixer, Object3D } from 'three';

/**
 * Hook for controlling animation of clock
 * @param {Object3D} clock Clock model object
 */
const useClock = (clock: Object3D) => {
  let mixer;
  let clockHandAnimationClip;

  if (clock) {
    mixer = new AnimationMixer(clock);

    // Animation updating hour and minute hand of the clock
    clockHandAnimationClip = clock.animations.find(
      clip => clip.name === 'Take 01',
    );

    const action = mixer.clipAction(clockHandAnimationClip);
    action.play();
  }

  useFrame(() => {
    if (!clock) return;
    const currentTime = new Date();

    // Calculate the number of hours elapsed since midnight
    const hours = (currentTime.getHours() % 12) + currentTime.getMinutes() / 60;

    // Map the hours to the animation duration
    const animationDuration = clockHandAnimationClip.duration;
    const animationTime = (hours / 12) * animationDuration;

    mixer.setTime(animationTime);
  });
};

export default useClock;

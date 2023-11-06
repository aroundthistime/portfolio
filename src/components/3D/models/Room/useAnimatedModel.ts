import { useFrame } from '@react-three/fiber';
import { AnimationClip, AnimationMixer, Object3D } from 'three';

/**
 * Hook for controlling animation of 3D model
 * @param {Object3D | undefined} animatedModel 3D model with animation (could be undefined in case it is not loaded yet)
 * @param {...string[]} clipNamesToPlay Clip names to play (in rest parameters). All clips will be played if no item is given
 */
const useAnimatedModel = (
  animatedModel: Object3D | undefined,
  ...clipNamesToPlay: string[]
) => {
  let mixer: AnimationMixer;

  /**
   * Get whether the given animation given is requested to be played
   * @param {AnimationClip} animationClip Animation clip to validate whether to play
   * @returns {boolean} True if the clip needs to be played
   */
  const isClipToPlay = (animationClip: AnimationClip) => {
    return (
      clipNamesToPlay.length === 0 ||
      clipNamesToPlay.includes(animationClip.name)
    );
  };

  if (animatedModel) {
    mixer = new AnimationMixer(animatedModel);

    animatedModel.animations.forEach(animationClip => {
      if (isClipToPlay(animationClip)) {
        const action = mixer.clipAction(animationClip);
        action.play();
      }
    });
  }

  useFrame((_, delta) => {
    if (!mixer) return;
    mixer.update(delta);
  });
};

export default useAnimatedModel;

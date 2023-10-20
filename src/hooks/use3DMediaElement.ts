/* eslint-disable no-param-reassign */
import { useEffect, useRef } from 'react';

/**
 * Hook for handling medias elements dedicated 3D scene
 */
const use3DMediaElement = () => {
  // HTML elements used for rendering medias in 3D scene
  const audioElementsRef = useRef<HTMLAudioElement[]>([]);
  const videoElementsRef = useRef<HTMLVideoElement[]>([]);

  /**
   * Create audio element for 3D rendering with the given source url
   * @param {string} url URL of the audio file to add
   * @returns {HTMLAudioElement} Audio element configured for 3D scene rendering
   */
  const createAudioElementFor3D = async (
    srcUrl: string,
  ): Promise<HTMLAudioElement> => {
    const audioElement = document.createElement('audio');
    await initialize3DMediaElement(audioElement, srcUrl);
    audioElementsRef.current.push(audioElement);
    return audioElement;
  };

  /**
   * Create video element for 3D rendering with the given source url
   * @param {string} srcUrl URL of the video file to add
   * @returns {HTMLAudioElement} Video element configured for 3D scene rendering
   */
  const createVideoElementFor3D = async (
    srcUrl: string,
  ): Promise<HTMLVideoElement> => {
    const videoElement = document.createElement('video');
    await initialize3DMediaElement(videoElement, srcUrl);
    videoElementsRef.current.push(videoElement);
    return videoElement;
  };

  /**
   * Initialize the 3D scene dedicated media element (including adding the element to DOM tree)
   * @param {HTMLAudioElement | HTMLVideoElement} mediaElement HTML media element
   * @param {string} srcUrl URL of the media file to add
   */
  const initialize3DMediaElement = (
    mediaElement: HTMLAudioElement | HTMLVideoElement,
    srcUrl: string,
  ) => {
    return new Promise((resolve, reject) => {
      mediaElement.oncanplaythrough = resolve;

      mediaElement.src = srcUrl;

      mediaElement.onerror = reject;

      document.body.appendChild(mediaElement);
    });
  };

  /**
   * Clean up all the created 3D media elements
   */
  const cleanUp3DMediaElements = () => {
    const threeDMediaElements = [
      ...audioElementsRef.current,
      ...videoElementsRef.current,
    ];
    threeDMediaElements.forEach(threeDMediaElement => {
      if (document.body.contains(threeDMediaElement)) {
        document.body.removeChild(threeDMediaElement);
      }
    });
  };

  useEffect(() => {
    return () => {
      cleanUp3DMediaElements();
    };
  }, []);

  return {
    audioElements: audioElementsRef.current,
    videoElements: videoElementsRef.current,
    createAudioElementFor3D,
    createVideoElementFor3D,
  };
};

export default use3DMediaElement;

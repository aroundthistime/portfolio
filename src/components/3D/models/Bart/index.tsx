import { extend, useLoader, useThree } from '@react-three/fiber';
import { Sprite, TextureLoader, Vector3 } from 'three';
import SpriteText from 'three-spritetext';
import { useEffect, useRef, useState } from 'react';
import use3DMediaElement from '@/hooks/use3DMediaElement';
import { getRandomItemFromArray } from '@/utils/array';
import useRaycaster from '@/hooks/useRaycaster';
import { getScaleVector, isDescendantOf } from '@/utils/threeUtils';
import SpeechBubble from './SpeechBubble';

extend({ SpriteText });

const Bart = () => {
  const bartTexture = useLoader(TextureLoader, '/models/bart.png');
  const { raycaster, scene } = useThree();
  const { createAudioElementFor3D } = use3DMediaElement();
  const { setRaycasterFromMouseEvent } = useRaycaster();

  const bartAudioStateRef = useRef({
    isLoaded: false,
    isPlaying: false,
    audioElements: [],
  });
  const bartRef = useRef<Sprite>(null!);
  const [speechBubbleContent, setSpeechBubbleContent] = useState('');

  const BART_POSITION = new Vector3(2.2, 1.15, 2.5);

  /**
   * URL source and line content for the bart's audios
   */
  const BART_AUDIOS = [
    {
      src: '/audios/bart/bart-sir.mp3',
      content: 'Bart simpson sir',
    },
    {
      src: '/audios/bart/feeling.mp3',
      content: 'How you feeling',
    },
    {
      src: '/audios/bart/hello-sir.mp3',
      content: 'Hello, sir',
    },
    {
      src: '/audios/bart/hey.mp3',
      content: 'Hey!',
    },
  ];

  /**
   * Initialize the audios which will be used to play bart's voice
   */
  const initializeBartVoice = async () => {
    await Promise.all(
      BART_AUDIOS.map(async bartAudio => {
        const { src, content } = bartAudio;
        const audioElement = await createAudioElementFor3D(src);
        audioElement.setAttribute('data-audio-content', content);
        bartAudioStateRef.current.audioElements.push(audioElement);
      }),
    );
    bartAudioStateRef.current.isLoaded = true;
  };

  /**
   * Event handler for mouse moving event on the document.
   * Define whether the cursor is hovering bart and if so,
   * change the cursor style to pointer (to let the user know it's clickable)
   * @param {MouseEvent} event Mouse moving event
   */
  const onDocumentMouseMove = event => {
    if (mouseEventIntersectedBart(event)) {
      document.body.style.cursor = 'pointer';
    } else {
      document.body.style.cursor = 'default';
    }
  };

  /**
   * Event handler for click event on document.
   * Play a random audio and show the line while playing if bart character is clicked
   * @param {MouseEvent} event Mouse click event
   */
  const onDocumentClick = event => {
    if (!bartAudioStateRef.current.isLoaded) return;
    if (bartAudioStateRef.current.isPlaying) return;

    if (!mouseEventIntersectedBart(event)) return;

    bartAudioStateRef.current.isPlaying = true;
    const randomAudioElement = getRandomItemFromArray<HTMLAudioElement>(
      bartAudioStateRef.current.audioElements,
    );
    const content = randomAudioElement.getAttribute('data-audio-content');
    setSpeechBubbleContent(content);
    randomAudioElement.play();
    randomAudioElement.onended = () => {
      bartAudioStateRef.current.isPlaying = false;
      randomAudioElement.onended = undefined;
      setSpeechBubbleContent('');
    };
  };

  /**
   * Get whether given mouse event has intersected bart character or not.
   * The result is only true if the intersection has not been disturbed by any other elements.
   * (eg. the result would be false if intersection was made but bart was occluded at the moment)
   * @param {MouseEvent} mouseEvent Mouse event to check the intersection
   * @returns {boolean} True if the mouse event has intersected bart character
   */
  const mouseEventIntersectedBart = (mouseEvent: MouseEvent) => {
    setRaycasterFromMouseEvent(mouseEvent);

    const intersections = raycaster.intersectObjects(scene.children, true);

    const intersectedObject = intersections[0]?.object;

    return (
      intersectedObject && isDescendantOf(intersectedObject, bartRef.current)
    );
  };

  useEffect(() => {
    initializeBartVoice();
    document.addEventListener('click', onDocumentClick);
    document.addEventListener('mousemove', onDocumentMouseMove);
    return () => {
      document.removeEventListener('click', onDocumentClick);
      document.removeEventListener('mousemove', onDocumentMouseMove);
    };
  }, []);

  return (
    <sprite ref={bartRef} position={BART_POSITION} scale={getScaleVector(1.8)}>
      {/* Support transparent background */}
      <spriteMaterial map={bartTexture} alphaTest={0.5} transparent />
      {speechBubbleContent && <SpeechBubble content={speechBubbleContent} />}
    </sprite>
  );
};

export default Bart;

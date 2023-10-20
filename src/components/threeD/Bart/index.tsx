import { extend, useFrame, useLoader, useThree } from '@react-three/fiber';
import { Sprite, TextureLoader, Vector3 } from 'three';
import SpriteText from 'three-spritetext';
import { useEffect, useRef } from 'react';
import use3DMediaElement from '@/hooks/use3DMediaElement';
import { getRandomItemFromArray } from '@/utils/array';
import useRaycaster from '@/hooks/useRaycaster';

extend({ SpriteText });

const Bart = () => {
  const bartTexture = useLoader(TextureLoader, '/models/bart.png');
  const { raycaster, camera } = useThree();

  const bartAudioStateRef = useRef({
    isLoaded: false,
    isPlaying: false,
    audioElements: [],
  });
  const bartRef = useRef<Sprite>(null!);
  const bartTextRef = useRef<SpriteText>(null!);

  const { createAudioElementFor3D } = use3DMediaElement();
  const { setRaycasterFromMouseEvent } = useRaycaster();

  const POSITION = new Vector3(-2, 1.1, 2);
  const SCALE = new Vector3(1.8, 1.8, 1.8);

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
    setRaycasterFromMouseEvent(event);

    if (!bartAudioStateRef.current.isLoaded) return;

    const intersections = raycaster.intersectObject(bartRef.current, true);

    if (intersections.length > 0) {
      document.body.style.cursor = 'pointer';
    } else {
      document.body.style.cursor = 'default';
    }
  };

  /**
   * Event handler for click event on bart character.
   * Play a random audio and show the line while playing
   */
  const onClick = () => {
    if (!bartAudioStateRef.current.isLoaded) return;
    if (bartAudioStateRef.current.isPlaying) return;

    bartAudioStateRef.current.isPlaying = true;
    const randomAudioElement = getRandomItemFromArray<HTMLAudioElement>(
      bartAudioStateRef.current.audioElements,
    );
    const content = randomAudioElement.getAttribute('data-audio-content');
    bartTextRef.current.text = content;
    randomAudioElement.play();
    randomAudioElement.onended = () => {
      bartAudioStateRef.current.isPlaying = false;
      randomAudioElement.onended = undefined;
      bartTextRef.current.text = '';
    };
  };

  useFrame(() => {
    if (!bartTextRef.current) return;

    // Locate the line bart is saying on top of bart's head
    const bartWorldPosition = bartRef.current.getWorldPosition(new Vector3());
    bartTextRef.current.position.set(
      bartWorldPosition.x + 0.5,
      bartWorldPosition.y + 1.3,
      bartWorldPosition.z,
    );
  });

  useEffect(() => {
    initializeBartVoice();
    document.addEventListener('mousemove', onDocumentMouseMove);
    return () => {
      document.removeEventListener('mousemove', onDocumentMouseMove);
    };
  }, []);

  return (
    <group>
      <sprite ref={bartRef} position={POSITION} scale={SCALE} onClick={onClick}>
        {/* Support transparent background */}
        <spriteMaterial map={bartTexture} alphaTest={0.5} transparent />
      </sprite>
      <spriteText ref={bartTextRef} textHeight={0.5} color="black" />
    </group>
  );
};

export default Bart;

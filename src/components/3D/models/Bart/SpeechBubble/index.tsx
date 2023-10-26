import { Html } from '@react-three/drei';
import { Vector3 } from 'three';
import { SpeechBubbleContainer, SpeechBubbleContent } from './style';

const SpeechBubble = ({ content, position }: Props) => {
  return (
    <Html transform sprite position={position}>
      <SpeechBubbleContainer>
        <SpeechBubbleContent>{content}</SpeechBubbleContent>
      </SpeechBubbleContainer>
    </Html>
  );
};

interface Props {
  content: string;
  position: Vector3;
}

export default SpeechBubble;

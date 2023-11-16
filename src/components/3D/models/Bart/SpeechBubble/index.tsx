import { Html } from '@react-three/drei';
import { SpeechBubbleContainer, SpeechBubbleContent } from './style';

const SpeechBubble = ({ content }: Props) => {
  return (
    <Html transform sprite>
      <SpeechBubbleContainer>
        <SpeechBubbleContent>{content}</SpeechBubbleContent>
      </SpeechBubbleContainer>
    </Html>
  );
};

interface Props {
  content: string;
}

export default SpeechBubble;

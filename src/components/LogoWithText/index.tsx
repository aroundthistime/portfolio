import { Logo, LogoWithTextContainer } from './style';

/**
 * Component for rendering logo + text combination
 */
const LogoWithText = ({ text, logoSrc }: Props) => {
  return (
    <LogoWithTextContainer>
      <Logo src={logoSrc} alt={`${text} logo`} />
      {text}
    </LogoWithTextContainer>
  );
};

interface Props {
  text: string;
  logoSrc: string;
}

export default LogoWithText;

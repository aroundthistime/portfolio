import { Logo, LogoWithTextContainer } from './style';

/**
 * Component for rendering logo + text combination
 */
const LogoWithText = ({ text, logoSrc, className = '' }: Props) => {
  return (
    <LogoWithTextContainer className={className}>
      <Logo src={logoSrc} alt={`${text} logo`} className="logo" />
      {text}
    </LogoWithTextContainer>
  );
};

interface Props {
  text: string;
  logoSrc: string;
  className?: string;
}

export default LogoWithText;
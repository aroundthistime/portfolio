import { Logo } from './style';

/**
 * Component for rendering logo + text combination
 */
const LogoWithText = ({ text, logoSrc }: Props) => {
  return (
    <span style={{ display: 'flex' }}>
      <Logo src={logoSrc} alt={`${text} logo`} />
      {text}
    </span>
  );
};

interface Props {
  text: string;
  logoSrc: string;
}

export default LogoWithText;

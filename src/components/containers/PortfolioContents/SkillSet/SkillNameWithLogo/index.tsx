import { SkillLogo } from './style';

const SkillNameWithLogo = ({ name, logoSrc }: Props) => {
  return (
    <span style={{ display: 'flex' }}>
      <SkillLogo src={logoSrc} alt={`${name} logo`} />
      {name}
    </span>
  );
};

interface Props {
  name: string;
  logoSrc: string;
}

export default SkillNameWithLogo;

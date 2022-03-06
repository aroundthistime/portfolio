import React from 'react';
import './skillIcon.scss';

type Props = {
  src: string;
  name: string;
  className?: string;
};

const SkillIcon = ({src, name, className = ''}: Props) => (
  <img className={`skill__icon ${className}`} src={src} alt={name} />
);

export default SkillIcon;

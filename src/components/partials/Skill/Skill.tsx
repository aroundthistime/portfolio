import React from 'react';
import SkillIcon from '../../atoms/SkillIcon/SkillIcon';
import './skill.scss';

type Props = {
  image: string;
  names: string[];
  descriptions: string[];
};

const Skill = ({image, names, descriptions}: Props) => {
  const titleText = names.join('/');
  return (
    <li className="skill">
      <div className="skill__header no-drag">
        <SkillIcon src={image} name={titleText} />
        <h4 className="skill__title">{titleText}</h4>
      </div>
      <ul className="skill__descriptions">
        {descriptions.map(description => (
          <li className="skill__description" key={description}>
            {description}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Skill;

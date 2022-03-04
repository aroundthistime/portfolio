import React from 'react';
import './skill.scss';

type Props = {
  imageSrc: string;
  names: string[];
  descriptions?: string[];
};

const Skill = ({imageSrc, names, descriptions = []}: Props) => {
  const titleText = names.join('/');
  return (
    <li className="skill">
      <div className="skill__header no-drag">
        <img className="skill__image" src={imageSrc} alt={titleText} />
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

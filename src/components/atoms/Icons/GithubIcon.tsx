import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';

type Props = {
  className?: string;
};

const GithubIcon = ({className = ''}: Props) => (
  <FontAwesomeIcon icon={faGithub} className={className} />
);

export default GithubIcon;

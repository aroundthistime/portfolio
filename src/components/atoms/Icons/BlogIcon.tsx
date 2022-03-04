import {faBlog} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';

type Props = {
  className?: string;
};

const BlogIcon = ({className = ''}: Props) => (
  <FontAwesomeIcon icon={faBlog} className={className} />
);

export default BlogIcon;

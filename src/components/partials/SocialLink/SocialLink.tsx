import React from 'react';
import './socialLink.scss';

type Props = {
  to: string;
  title: string | React.ReactElement;
  description: string;
};

const SocialLink = ({to, title, description}: Props) => (
  <a href={to} className="social-link">
    <div className="social-link__card social-link__card--default">{title}</div>
    <div className="social-link__card social-link__card--hidden">
      {description}
    </div>
  </a>
);

export default SocialLink;

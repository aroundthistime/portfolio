import React from 'react';
import Card from '../Card/Card';
import './socialLink.scss';

type Props = {
  to: string;
  title: string;
  iconElement: React.ReactElement;
  description: string;
};

const SocialLink = ({to, title, iconElement, description}: Props) => (
  <a href={to} className="social-link">
    <Card>
      <Card.Default>
        {title}
        {React.cloneElement(iconElement, {
          className: `${iconElement.props.className} social-link__icon`,
        })}
      </Card.Default>
      <Card.OnHover>{description}</Card.OnHover>
    </Card>
  </a>
);

export default SocialLink;

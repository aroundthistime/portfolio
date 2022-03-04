import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import './socialLink.scss';

interface SocialLinkSubComponents {
  Default: React.FC<{}>;
  OnHover: React.FC<{}>;
}

type Props = {
  to: string;
  children?: React.ReactNode | React.ReactNode[];
};

const SocialLink: React.FC<Props> & SocialLinkSubComponents = ({
  to,
  children,
}: Props) => (
  <a href={to} className="social-link no-drag">
    {children}
  </a>
);

SocialLink.Default = ({children}) => (
  <div className="social-link__card social-link__card--default">{children}</div>
);

SocialLink.OnHover = ({children}) => (
  <div className="social-link__card social-link__card--hidden">{children}</div>
);

export default SocialLink;

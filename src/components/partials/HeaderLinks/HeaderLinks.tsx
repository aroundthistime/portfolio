import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBlog} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import HeaderLink from '../../atoms/HeaderLink/HeaderLink';
import './headerLinks.scss';

function HeaderLinks() {
  return (
    <ul className="header__links">
      <GithubLink />
      <BlogLink />
    </ul>
  );
}

export default HeaderLinks;

function GithubLink() {
  return (
    <HeaderLink to="https://github.com/aroundthistime">
      <FontAwesomeIcon icon={faGithub} className="header__icon" />
    </HeaderLink>
  );
}

function BlogLink() {
  return (
    <HeaderLink to="https://aroundthistime.tistory.com/">
      <FontAwesomeIcon icon={faBlog} className="header__icon" />
    </HeaderLink>
  );
}

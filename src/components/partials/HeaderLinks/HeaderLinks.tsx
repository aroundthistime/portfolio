import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBlog} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import HeaderLink from '../../atoms/HeaderLink/HeaderLink';
import './headerLinks.scss';
import GithubIcon from '../../atoms/Icons/GithubIcon';
import BlogIcon from '../../atoms/Icons/BlogIcon';

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
      <GithubIcon className="header__icon" />
    </HeaderLink>
  );
}

function BlogLink() {
  return (
    <HeaderLink to="https://aroundthistime.tistory.com/">
      <BlogIcon className="header__icon" />
    </HeaderLink>
  );
}

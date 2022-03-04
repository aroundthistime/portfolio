import React from 'react';
import Logo from '../../atoms/Logo/Logo';
import HeaderLinks from '../HeaderLinks/HeaderLinks';
import './header.scss';

function Header() {
  return (
    <header className="header">
      <Logo />
      <HeaderLinks />
    </header>
  );
}

export default Header;

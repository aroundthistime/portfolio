import React from 'react';
import {Link} from 'react-router-dom';
import './logo.scss';

function Logo() {
  return (
    <Link to="/" className="logo">
      <h3 className="no-drag logo__text">aroundthistime</h3>
    </Link>
  );
}

export default Logo;

import React from 'react';
import './headerLink.scss';

type Props = {
  to: string;
  children: React.ReactNode;
};

function HeaderLink(props: Props) {
  const {to, children} = props;
  return (
    <li className="header__link">
      <a href={to}>{children}</a>
    </li>
  );
}

export default HeaderLink;

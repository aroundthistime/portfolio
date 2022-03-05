import React from 'react';
import './card.scss';

interface CardSubComponents {
  Default: React.FC<{}>;
  OnHover: React.FC<{}>;
}

type Props = {
  children?: React.ReactNode | React.ReactNode[];
};

const Card: React.FC<Props> & CardSubComponents = ({children}) => (
  <div className="card-container no-drag">{children}</div>
);

Card.Default = ({children}) => (
  <div className="card-container__card card-container__card--default">
    {children}
  </div>
);

Card.OnHover = ({children}) => (
  <div className="card-container__card card-container__card--hidden">
    {children}
  </div>
);

export default Card;

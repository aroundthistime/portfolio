import React from 'react';
import LoaderImage from '../../../assets/images/loading.gif';
import './loader.scss';

type Props = {
  className?: string;
};

const Loader = ({className = ''}: Props) => (
  <div className={`loader ${className}`}>
    <img src={LoaderImage} className="loader__image no-drag" alt="로딩중" />
  </div>
);

export default Loader;

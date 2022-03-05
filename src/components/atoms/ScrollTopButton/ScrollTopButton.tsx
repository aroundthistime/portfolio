import {faCaretUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import './scrollTopButton.scss';
import {useScrollTopButton} from './useScrollTopButton';

const ScrollTopButton = () => {
  const {isVisible, scrollToTop} = useScrollTopButton();
  return (
    <button
      className={`top-button no-drag ${isVisible ? '' : 'hidden'}`}
      onClick={scrollToTop}
      type="button">
      <FontAwesomeIcon icon={faCaretUp} className="top-button__icon" />
    </button>
  );
};

export default ScrollTopButton;

import React from 'react';
import './errorMessage.scss';

const ErrorMessage = () => (
  <div className="error-message">
    <h1 className="error-message__text no-drag">
      오류가 발생했습니다.{'\n'}다시 시도해주세요.
    </h1>
  </div>
);

export default ErrorMessage;

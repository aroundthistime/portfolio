import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {Provider} from 'react-redux';
import {createStore} from '@reduxjs/toolkit';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './components/wrapper/ErrorBoundary';
import rootReducer from './modules/root';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

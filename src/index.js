import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const element = document.getElementById('martins-test-widget');

if (!element) {
  throw new Error('Please provide an element to attach Martin\'s base widget too');
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  element,
);

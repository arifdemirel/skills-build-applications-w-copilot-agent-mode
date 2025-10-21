import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// Ensure environment variable is available - CRA exposes REACT_APP_* vars
const codespaceName = process.env.REACT_APP_CODESPACE_NAME || '';
console.log('REACT_APP_CODESPACE_NAME=', codespaceName);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

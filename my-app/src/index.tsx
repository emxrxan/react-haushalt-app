import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppStyle } from './appStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppStyle />
    <App />
  </React.StrictMode>
);

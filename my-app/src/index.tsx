import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppStyle } from './appStyle';
import { initializeIcons } from '@fluentui/react/lib/Icons';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

initializeIcons()

root.render(
  <React.StrictMode>
    <AppStyle />
    <App />
  </React.StrictMode>
);

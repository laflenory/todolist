import React from 'react';
import ReactDOM from 'react-dom/client';

import Application from './Application';

import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);

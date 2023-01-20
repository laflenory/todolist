import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './Application';
import { Provider } from 'react-redux';
import store from './store';

import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Application />
  </Provider>
);

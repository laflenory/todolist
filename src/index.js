import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './Application';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import store from './store';

import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
const persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Application />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

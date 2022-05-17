import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './scss/index.scss'
import App from './App';

/** stores **/
import store from './stores';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
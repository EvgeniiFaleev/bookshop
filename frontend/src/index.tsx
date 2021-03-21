import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@store';
import { ConnectedApp } from './App';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

import * as SessionApiUtils from './util/session_api_utils';
import * as SessionActions from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
})
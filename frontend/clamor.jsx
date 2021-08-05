import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

import { fetchChannels } from './actions/private_channel_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  window.store = store;
  window.fetchChannels = fetchChannels;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
})
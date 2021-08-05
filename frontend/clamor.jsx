import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

import { fetchChannelByUser, fetchChannels } from './actions/private_channel_actions';
// import { fetchPrivateChannelByUser } from './util/private_channel_api_utils';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  window.store = store;
  window.fetchChannels = fetchChannels;
  window.fetchChannel = fetchChannelByUser;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
})
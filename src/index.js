import React from 'react';
import { render } from 'react-dom';
import store from './store';
import AppContainer from './AppContainer';

render(
  <AppContainer store={store} />,
  document.getElementById('app')
);

import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import CalculatorContainer from './calculator/containers/CalculatorContainer';

const AppContainer = ({ store }) =>
  <Provider store={store}>
    <CalculatorContainer />
  </Provider>;

AppContainer.propTypes = {
  store: PropTypes.object.isRequired
};

export default AppContainer;

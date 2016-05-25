import { createStore, applyMiddleware, combineReducers } from 'redux';
import sumReducer from './calculator/reducers/sumReducer';
import nextOperandReducer from './calculator/reducers/nextOperandReducer';
import createLogger from 'redux-logger';
const logger = createLogger();

const store = createStore(
  combineReducers({
    sum: sumReducer,
    nextOperand: nextOperandReducer
  }),
  {},
  applyMiddleware(logger));

export default store;

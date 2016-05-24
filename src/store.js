import { createStore, combineReducers } from 'redux';
import sumReducer from './calculator/reducers/sumReducer';
import nextOperandReducer from './calculator/reducers/nextOperandReducer';

const store = createStore(
  combineReducers({
    sum: sumReducer,
    nextOperand: nextOperandReducer
  }));

export default store;

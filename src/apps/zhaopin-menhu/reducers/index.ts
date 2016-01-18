import { Reducer, combineReducers } from 'redux';
import { common } from './common';

export const myApp:Reducer = combineReducers({
  common
});

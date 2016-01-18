import { Reducer, combineReducers } from 'redux';
import common from './common';

const myApp:Reducer = combineReducers({
  common
});

export default myApp;

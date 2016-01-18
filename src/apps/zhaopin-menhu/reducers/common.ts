/// <reference path="../../../../typings/ttsd.d.ts" />

import { Reducer } from 'redux';
import { onActions } from 'common/onActions';

const initialState = {};

export default onActions({
  queryEnum(state, action) {
    return state;
  },
  requestEnum(state, action) {
    return state;
  }
}, initialState)

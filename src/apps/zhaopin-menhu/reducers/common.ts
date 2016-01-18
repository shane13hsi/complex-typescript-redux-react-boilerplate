/// <reference path="../../../../typings/ttsd.d.ts" />

import { Reducer } from 'redux';
import { onActions } from 'common/onActions';

const initialState = {};

export default onActions({
  'query enum' (state, action) {
    return state;
  }
}, initialState)

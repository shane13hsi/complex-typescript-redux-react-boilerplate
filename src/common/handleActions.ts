/// <reference path="../../typings/ttsd.d.ts" />

import { Reducer } from 'redux';

export function handleActions(initialState:Object, handlers:Object):Reducer {
  return (state = initialState, action:any = {}) => {
    return handlers.hasOwnProperty(action.type)
      ? handlers[action.type](state, action)
      : state;
  }
}

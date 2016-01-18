/// <reference path="../../typings/ttsd.d.ts" />

import { Reducer } from 'redux';
import { IAction } from "./IAction";

export function onActions(handlers:{ [key: string]: Reducer}, initialState:Object):Reducer {
  return (state = initialState, action:IAction) => {
    return handlers.hasOwnProperty(action.type)
      ? handlers[action.type](state, action)
      : state;
  }
}

/// <reference path="../../../../typings/ttsd.d.ts" />

import { Reducer } from 'redux';
import { TYPE } from '../actions/common';
import { IAction } from '../actions/IAction';

export function common(state:any = {}, action:IAction<TYPE>):Reducer {
  const { type } = action;
  switch (type) {
    case TYPE.QUERY_ENUM:
      return state;
    default:
      return state;
  }
}

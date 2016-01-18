/// <reference path="../../../../typings/ttsd.d.ts" />

import { Reducer } from 'redux';
import { TYPE } from '../actions/common';
import { IAction } from 'common/IAction';

export function common(state:any = {}, action:IAction):Reducer {
  const { type } = action;
  switch (type) {
    case TYPE['query enum']:
      console.log(1);
      return state;
    default:
      return state;
  }
}

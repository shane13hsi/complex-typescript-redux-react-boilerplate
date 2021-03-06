/// <reference path="../../typings/ttsd.d.ts" />

import { IAction } from './IAction';

function identity(t) {
  return t;
}

export function action(type:string, actionCreator?:any):(...args:any[]) => IAction {
  const finalActionCreator = typeof actionCreator === 'function'
    ? actionCreator
    : identity;

  return (...args) => {
    return {
      type,
      payload: finalActionCreator(...args)
    };
  }
}

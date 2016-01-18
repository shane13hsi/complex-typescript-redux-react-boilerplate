import { IAction } from './IAction';

function identity(t) {
  return t;
}

export function createAction(type:string, actionCreator?:any):() => IAction {
  const finalActionCreator = typeof actionCreator === 'function'
    ? actionCreator
    : identity;

  return (...args) => {
    const action = {
      type,
      payload: finalActionCreator(...args)
    };
    return action;
  }
}

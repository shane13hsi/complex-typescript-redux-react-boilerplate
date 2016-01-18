/// <reference path="../../../../typings/ttsd.d.ts" />

export interface IAction<T> {
  type: T;
  payload: any
}

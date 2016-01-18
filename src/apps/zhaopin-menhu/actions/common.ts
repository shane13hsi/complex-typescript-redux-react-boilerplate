/// <reference path="../../../../typings/ttsd.d.ts" />
import { IAction } from './IAction';

export enum TYPE { QUERY_ENUM }

export function queryEnum():IAction<TYPE> {
  return {type: TYPE.QUERY_ENUM};
}

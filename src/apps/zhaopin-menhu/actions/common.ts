/// <reference path="../../../../typings/ttsd.d.ts" />
import { IAction } from 'common/IAction';

export enum TYPE { 'query enum' }

export function queryEnum():IAction {
  return {type: TYPE['query enum']};
}

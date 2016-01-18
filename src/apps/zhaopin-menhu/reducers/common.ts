/// <reference path="../../../../typings/ttsd.d.ts" />

import { Reducer } from 'redux';
import { handleActions } from 'common/handleActions';
import { TYPE } from '../actions/common';
import { IAction } from '../actions/IAction';

export function common():Reducer {
  return handleActions({}, {
    [TYPE.QUERY_ENUM]: (state, action:IAction<TYPE>) => {
      return {};
    }
  });
}

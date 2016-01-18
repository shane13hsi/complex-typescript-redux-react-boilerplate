/// <reference path="../../../../typings/ttsd.d.ts" />
import { handleActions } from 'common/handleActions';
import { TYPE } from '../actions/common';
export function common() {
    return handleActions({}, {
        [TYPE.QUERY_ENUM]: (state, action) => {
            return {};
        }
    });
}

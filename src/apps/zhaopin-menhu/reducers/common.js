/// <reference path="../../../../typings/ttsd.d.ts" />
import { TYPE } from '../actions/common';
export function common(state = {}, action) {
    const { type } = action;
    switch (type) {
        case TYPE['query enum']:
            console.log(1);
            return state;
        default:
            return state;
    }
}

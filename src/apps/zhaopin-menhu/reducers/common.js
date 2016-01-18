/// <reference path="../../../../typings/ttsd.d.ts" />
import { onActions } from 'common/onActions';
const initialState = {};
export default onActions({
    queryEnum(state, action) {
        return state;
    },
    requestEnum(state, action) {
        console.log(action);
        return state;
    }
}, initialState);

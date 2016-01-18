/// <reference path="../../typings/ttsd.d.ts" />
export function handleActions(initialState, handlers) {
    return (state = initialState, action = {}) => {
        return handlers.hasOwnProperty(action.type)
            ? handlers[action.type](state, action)
            : state;
    };
}

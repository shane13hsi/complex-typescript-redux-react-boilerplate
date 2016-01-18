/// <reference path="../../typings/ttsd.d.ts" />
export function onActions(handlers, initialState) {
    return (state = initialState, action) => {
        return handlers.hasOwnProperty(action.type)
            ? handlers[action.type](state, action)
            : state;
    };
}

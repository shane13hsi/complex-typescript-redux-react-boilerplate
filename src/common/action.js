/// <reference path="../../typings/ttsd.d.ts" />
function identity(t) {
    return t;
}
export function action(type, actionCreator) {
    const finalActionCreator = typeof actionCreator === 'function'
        ? actionCreator
        : identity;
    return (...args) => {
        return {
            type,
            payload: finalActionCreator(...args)
        };
    };
}

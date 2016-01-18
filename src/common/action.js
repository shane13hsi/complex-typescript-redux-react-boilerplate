function identity(t) {
    return t;
}
export function action(type, actionCreator) {
    const finalActionCreator = typeof actionCreator === 'function'
        ? actionCreator
        : identity;
    return (...args) => {
        const action = {
            type,
            payload: finalActionCreator(...args)
        };
        return action;
    };
}

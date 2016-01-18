import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
export function configureStore(reducer, hotReducerFn) {
    const store = applyMiddleware(thunk)(createStore)(reducer);
    if (module.hot) {
        hotReducerFn(store, module);
    }
    return store;
}

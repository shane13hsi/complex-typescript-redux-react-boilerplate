/// <reference path="../../../typings/ttsd.d.ts" />
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
export function configureStore() {
    const store = applyMiddleware(thunk)(createStore)(rootReducer);
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}

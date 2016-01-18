import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
export function configureStore(reducer) {
    const store = applyMiddleware(thunk)(createStore)(reducer);
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers').counterApp;
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}

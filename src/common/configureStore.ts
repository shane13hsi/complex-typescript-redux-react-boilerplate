import { Reducer, Store, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

interface IHotModule {
  hot?: { accept: (path:string, callback:() => void) => void };
}

declare const module:IHotModule;

export function configureStore(reducer:Reducer):Store {
  const store = applyMiddleware(thunk)(createStore)(reducer);
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer:any = require('./reducers').counterApp;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}

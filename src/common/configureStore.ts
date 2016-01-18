import { Reducer, Store, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

interface IHotModule {
  hot?: { accept: (path:string, callback:() => void) => void };
}

declare const module:IHotModule;

export function configureStore(reducer:Reducer, hotReducerFn:(store:Store, module:IHotModule) => any):Store {
  const store = applyMiddleware(thunk)(createStore)(reducer);
  if (module.hot) {
    hotReducerFn(store, module);
  }
  return store;
}

/// <reference path="../../../typings/ttsd.d.ts" />

import { Reducer, Store, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { IHotModule } from "common/IHotModule";

declare const module:IHotModule;

export function configureStore():Store {
  const store = applyMiddleware(thunk)(createStore)(rootReducer);
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}

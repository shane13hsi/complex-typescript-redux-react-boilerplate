/// <reference path="../../../typings/ttsd.d.ts" />

require('./styles/global.css');
var React = require('react');
import * as ReactDOM from 'react-dom';

import { Store, createStore } from 'redux';
import { Provider } from 'react-redux';

import { Router, Route, hashHistory } from 'react-router';
import { myApp } from './reducers/index';

import { App } from './routes/App';

interface IHotModule {
  hot?: { accept: (path:string, callback:() => void) => void };
}

declare const module:IHotModule;

function configureStore():Store {
  const store = createStore(myApp);
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer:any = require('./reducers').counterApp;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>
), document.getElementById('__REACT__'));

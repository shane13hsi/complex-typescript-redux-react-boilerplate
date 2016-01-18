/// <reference path="../../../typings/ttsd.d.ts" />
require('./styles/global.css');
var React = require('react');
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { myApp } from './reducers/index';
import { AppContainer } from './containers/AppContainer';
function configureStore() {
    const store = createStore(myApp);
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers').counterApp;
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}
const store = configureStore();
ReactDOM.render((<Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
      </Route>
    </Router>
  </Provider>), document.getElementById('__REACT__'));

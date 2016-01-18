/// <reference path="../../../typings/ttsd.d.ts" />
require('./styles/global.css');
var React = require('react');
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { AppContainer } from './containers/AppContainer';
function configureStore() {
    const store = applyMiddleware(thunk)(createStore)(rootReducer);
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers').default;
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

/// <reference path="../../../typings/ttsd.d.ts" />
require('./styles/global.css');
var React = require('react');
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { configureStore } from "common/configureStore";
import { myApp } from './reducers/index';
import { AppContainer } from './containers/AppContainer';
const store = configureStore(myApp);
ReactDOM.render((<Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
      </Route>
    </Router>
  </Provider>), document.getElementById('__REACT__'));

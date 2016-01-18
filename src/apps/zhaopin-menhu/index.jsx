/// <reference path="../../../typings/ttsd.d.ts" />
require('./styles/global.css');
var React = require('react');
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { AppContainer } from './containers/AppContainer';
import { configureStore } from './configureStore';
ReactDOM.render((<Provider store={configureStore()}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
      </Route>
    </Router>
  </Provider>), document.getElementById('__REACT__'));

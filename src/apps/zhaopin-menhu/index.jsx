/// <reference path="../../../typings/ttsd.d.ts" />
require('./global-styles/global.css');
var React = require('react');
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { configureStore } from 'configureStore';
import { AppContainer } from 'containers/AppContainer';
ReactDOM.render((<Provider store={configureStore()}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
      </Route>
    </Router>
  </Provider>), document.getElementById('__REACT__'));

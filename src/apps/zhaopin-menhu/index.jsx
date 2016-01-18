/// <reference path="../../../typings/ttsd.d.ts" />
require('./styles/global.css');
var React = require('react');
import * as ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { App } from './routes/App';
ReactDOM.render((<Router history={hashHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>), document.getElementById('__REACT__'));

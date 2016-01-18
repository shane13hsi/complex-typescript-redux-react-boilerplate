/// <reference path="../../../typings/ttsd.d.ts" />
require('./styles/global.css');
var React = require('react');
import * as ReactDOM from 'react-dom';
import { App } from './routes/App';
router.start(() => {
    ReactDOM.render(<App />, document.getElementById('__REACT__'));
});

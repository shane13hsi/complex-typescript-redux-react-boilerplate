/// <reference path="../../../typings/ttsd.d.ts" />

require('./styles/global.css');
var React = require('react');
import * as ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router5';
import router from './router';

import { App } from './routes/App';

router.start(() => {
  ReactDOM.render(
    <RouterProvider router={ router }>
      <App />
    </RouterProvider>,
    document.getElementById('__REACT__')
  );
});

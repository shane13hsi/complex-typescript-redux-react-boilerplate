/// <reference path="../../../../typings/ttsd.d.ts" />

import * as React from 'react';
import { createElement } from 'react'
import { routeNode } from 'react-router5';
import { Inbox } from './Inbox';
import { Compose } from './Compose';
import { NotFound } from 'rill-component/NotFound'

const components = {
  'inbox': Inbox,
  'compose': Compose
};

@routeNode('')
export class App extends React.Component<any, {}> {

  render() {
    const { route } = this.props;
    const segment = route.name.split('.')[0];
    return createElement(components[segment] || NotFound);
  }

}

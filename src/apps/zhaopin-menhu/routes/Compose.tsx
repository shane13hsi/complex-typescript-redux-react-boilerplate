/// <reference path="../../../../typings/ttsd.d.ts" />

import * as React from 'react';
import { routeNode } from 'react-router5';

@routeNode('compose')
export class Compose extends React.Component<{}, {}> {

  render() {
    return (
      <div>
        <h1>Compose</h1>
      </div>
    );
  }

}

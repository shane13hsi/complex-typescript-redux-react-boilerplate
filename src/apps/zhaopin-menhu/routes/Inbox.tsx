/// <reference path="../../../../typings/ttsd.d.ts" />

import * as React from 'react';
import { routeNode } from 'react-router5';

@routeNode('inbox')
export class Inbox extends React.Component<{}, {}> {

  render() {
    return (
      <div>
        <h1>Inbox</h1>
      </div>
    );
  }

}

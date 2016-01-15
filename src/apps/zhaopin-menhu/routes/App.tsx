/// <reference path="../../../../typings/ttsd.d.ts" />

import * as React from 'react';
import { Inbox } from './Inbox';

const components = {
  'inbox': Inbox,
};

export class App extends React.Component<any, {}> {

  render() {
    const { route } = this.props;
    const segment = route.name.split('.')[0];
    return (
      <div>
        <h1>Zhaopin Menhu</h1>
      </div>
    );
  }

}

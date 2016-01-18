/// <reference path="../../../../typings/ttsd.d.ts" />

const styles = require('./App.css');
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

import * as React from 'react';

interface IProps {
  actions: any
}

export class App extends React.Component<IProps, {}> {
  componentDidMount() {
    this.props.actions.requestEnum();
  }

  public render() {
    return (
      <div className={cx('demo')}>
        App
      </div>
    );
  }
}

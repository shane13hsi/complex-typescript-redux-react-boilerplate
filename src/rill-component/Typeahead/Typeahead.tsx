/// <reference path="../../../typings/ttsd.d.ts" />
const styles = require('./Typeahead.css');
import * as React from 'react';
import className from 'classnames/bind';
const cx = className.bind(styles);

export class Typeahead extends React.Component<{}, {}> {

  render() {
    return (
      <p className={cx('bg')}>Typeahead</p>
    );
  }

}

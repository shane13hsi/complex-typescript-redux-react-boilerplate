/// <reference path="../../../typings/ttsd.d.ts" />
const styles = require('./Typeahead.css');
import * as React from 'react';
import className from 'classnames/bind';
const cx = className.bind(styles);

export class Typeahead extends React.Component<{}, {}> {

  constructor() {
    super();
    this.clickButton = this.clickButton.bind(this);
  }

  private clickButton() {
  }

  render() {
    return (
      <div>
        <p className={cx('bg')}>Typeahead</p>
        <input type="text"/>
        <button onClick={this.clickButton}></button>
      </div>
    );
  }

}

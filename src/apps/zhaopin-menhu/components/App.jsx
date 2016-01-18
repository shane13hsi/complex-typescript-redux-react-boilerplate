/// <reference path="../../../../typings/ttsd.d.ts" />
const styles = require('./App.css');
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import * as React from 'react';
export class App extends React.Component {
    componentDidMount() {
        this.props.actions.requestEnum();
    }
    render() {
        return (<div className={cx('demo')}>
        App
      </div>);
    }
}

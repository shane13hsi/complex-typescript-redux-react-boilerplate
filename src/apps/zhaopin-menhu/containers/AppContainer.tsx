/// <reference path="../../../../typings/ttsd.d.ts" />

import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import * as CommonActions from '../actions/common';
import { App } from '../components/App';

@connect(state => state.common)
export class AppContainer extends React.Component<any, {}> {
  render() {
    const { dispatch } = this.props;
    const actions = bindActionCreators(CommonActions, dispatch);
    return <App actions={actions}>App</App>;
  }

}

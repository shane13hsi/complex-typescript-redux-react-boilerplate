/// <reference path="../../../../typings/ttsd.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CommonActions from 'actions/common';
import { App } from 'components/App';
export let AppContainer = class extends React.Component {
    render() {
        const { dispatch } = this.props;
        const actions = bindActionCreators(CommonActions, dispatch);
        return <App actions={actions}>App</App>;
    }
};
AppContainer = __decorate([
    connect(state => state.common)
], AppContainer);

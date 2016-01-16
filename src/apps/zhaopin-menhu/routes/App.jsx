/// <reference path="../../../../typings/ttsd.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from 'react';
import { createElement } from 'react';
import { routeNode } from 'react-router5';
import { Inbox } from './Inbox';
import { Compose } from './Compose';
import { NotFound } from '../../../component-pool/NotFound';
const components = {
    'inbox': Inbox,
    'compose': Compose
};
export let App = class extends React.Component {
    render() {
        const { route } = this.props;
        const segment = route.name.split('.')[0];
        return createElement(components[segment] || NotFound);
    }
};
App = __decorate([
    routeNode('')
], App);

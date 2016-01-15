/// <reference path="../../../../typings/ttsd.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from 'react';
import { routeNode } from 'react-router5';
import { Typeahead } from 'rill-component/Typeahead/Typeahead';
export let Compose = class extends React.Component {
    render() {
        return (<div>
        <h1>Compose</h1>
        <Typeahead />
      </div>);
    }
};
Compose = __decorate([
    routeNode('compose')
], Compose);

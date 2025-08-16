import { Routes } from '@angular/router';
import { ControlFlow } from './components/control-flow/control-flow';
import { DataBindings } from './components/data-bindings/data-bindings';

export const routes: Routes = [
  {
    path: 'control-flow',
    loadComponent: () => {
      return import('./components/control-flow/control-flow').then(
        (m) => m.ControlFlow
      );
    },
  },
  {
    path: 'data-binding',
    loadComponent: () => {
      return import('./components/data-bindings/data-bindings').then(
        (m) => m.DataBindings
      );
    },
  },
  {
    path: 'directives',
    loadComponent: () => {
      return import('./components/directives/directives').then(
        (m) => m.Directives
      );
    },
  },
  {
    path: 'lifeCycle',
    loadComponent: () => {
      return import('./components/component-life-cycle/component-life-cycle').then(
        (m) => m.ComponentLifeCycle
      );
    },
  },
];



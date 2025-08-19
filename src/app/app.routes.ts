import { Routes } from '@angular/router';

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
      return import(
        './components/component-life-cycle/component-life-cycle'
      ).then((m) => m.ComponentLifeCycle);
    },
  },
  {
    path: 'getAPI',
    loadComponent: () => {
      return import('./get-api/get-api').then((m) => m.GetAPI);
    },
  },
];

import { Routes } from '@angular/router';
import { ReactiveUser } from './reactive-user/reactive-user';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'user',
    pathMatch: "full"

  },

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
  {
    path: 'user',
    loadComponent: () => {
      return import('./user/user').then((m) => m.User);
    },
  },
  {
    path: 'posts',
    loadComponent: () => {
      return import('./posts/posts').then((m) => m.Posts);
    },
  },
  // {
  //   path: 'reactiveUser',
  //   loadComponent: () => {
  //     return import('./reactive-user/reactive-user').then((m) => m.ReactiveUser);
      
  //   },
  // },

  {
    path: 'reactiveUser',
    component: ReactiveUser
  }
];

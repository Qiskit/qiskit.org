/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

import { Router } from '@vaadin/router';

export function init(outlet) {
  const router = new Router(outlet, { baseUrl: '/' });

  router.setRoutes([
    {
      path: '/',
      name: 'home',
      component: 'page-home',
      action: () => {
        import('./components/page-home.js');
      },
    },
    {
      path: '/terra',
      name: 'terra',
      component: 'page-terra',
      action: () => {
        import('./components/page-terra.js');
      },
    },
    {
      path: '/aer',
      name: 'aer',
      component: 'page-aer',
      action: () => {
        import('./components/page-aer.js');
      },
    },
    {
      path: '/aqua',
      name: 'aqua',
      component: 'page-aqua',
      action: () => {
        import('./components/page-aqua.js');
      },
    },
    {
      path: '/ignis',
      name: 'ignis',
      component: 'page-ignis',
      action: () => {
        import('./components/page-ignis.js');
      },
    },
    {
      path: '/documentation',
      component: 'page-documentation',
      action: () => {
        window.location.replace('/documentation');
      },
    },
    {
      path: '/fun',
      name: 'fun',
      component: 'page-fun',
      action: () => {
        import('./components/page-fun.js');
      },
    },
    {
      path: '/vscode',
      name: 'vscode',
      component: 'page-vscode',
      action: () => {
        import('./components/page-vscode.js');
      },
    },
    {
      path: '(.*)',
      name: 'not-found',
      component: 'page-not-found',
      action: () => {
        import('./components/page-not-found.js');
      },
    },
  ]);
}

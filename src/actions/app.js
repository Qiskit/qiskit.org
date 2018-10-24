/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

export const UPDATE_PAGE = 'UPDATE_PAGE';

const updatePage = page => ({
  type: UPDATE_PAGE,
  page,
});

const loadPage = page => dispatch => {
  switch (page) {
    case 'home':
      import('../components/page-home.js').then(() => {
        import('../components/page-terra.js');
        import('../components/page-aqua.js');
        import('../components/page-vscode.js');
        import('../components/page-fun.js');
      });
      break;
    case 'terra':
      import('../components/page-terra.js').then(() => {
        import('../components/page-home.js');
        import('../components/page-aqua.js');
        import('../components/page-vscode.js');
        import('../components/page-fun.js');
      });
      break;
    case 'aqua':
      import('../components/page-aqua.js').then(() => {
        import('../components/page-home.js');
        import('../components/page-terra.js');
        import('../components/page-vscode.js');
        import('../components/page-fun.js');
      });
      break;
    case 'vscode':
      import('../components/page-vscode.js').then(() => {
        import('../components/page-home.js');
        import('../components/page-terra.js');
        import('../components/page-aqua.js');
        import('../components/page-fun.js');
      });
      break;
    case 'fun':
      import('../components/page-fun.js').then(() => {
        import('../components/page-home.js');
        import('../components/page-terra.js');
        import('../components/page-aqua.js');
        import('../components/page-vscode.js');
      });
      break;
    default:
      // eslint-disable-next-line no-param-reassign
      page = 'notFound';
      import('../components/page-not-found.js');
  }

  dispatch(updatePage(page));
};

export const navigate = path => dispatch => {
  // Extract the page name from path.
  const page = path === '/' ? 'home' : path.slice(1);

  // Any other info you might want to extract from the path (like page type),
  // you can do here
  dispatch(loadPage(page));
};

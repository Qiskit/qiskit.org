/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

export const UPDATE_PAGE = 'UPDATE_PAGE';

export const navigate = path => dispatch => {
  // Extract the page name from path.
  const page = path === '/' ? 'home' : path.slice(1);

  // Any other info you might want to extract from the path (like page type),
  // you can do here
  dispatch(loadPage(page));
};

const loadPage = page => dispatch => {
  switch (page) {
    case 'home':
      import('../components/page-home.js');
      break;
    case 'terra':
      import('../components/page-terra.js');
      break;
    case 'aqua':
      import('../components/page-aqua.js');
      break;
    case 'vscode':
      import('../components/page-vscode.js');
      break;
    case 'fun':
      import('../components/page-fun.js');
      break;
    default:
      page = 'notFound';
      import('../components/page-not-found.js');
  }

  dispatch(updatePage(page));
};

const updatePage = page => ({
  type: UPDATE_PAGE,
  page,
});

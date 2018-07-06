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
  const splittedPath = (path || '').slice(1).split('/');
  const page = splittedPath[0] || 'home';
  const subPage = splittedPath[1] ? splittedPath[1] : undefined;

  // Any other info you might want to extract from the path (like page type),
  // you can do here
  dispatch(loadPage(page, subPage));
};

const loadPage = (page, subPage) => (dispatch, getState) => {
  switch (page) {
    case 'home':
      import('../components/page-home.js');
      break;
    case 'terra':
      import('../components/page-terra.js');
      break;
    case 'acqua':
      import('../components/page-acqua.js');
      break;
    case 'studio':
      import('../components/page-studio.js');
      break;
    default:
      page = 'notFound';
      import('../components/page-not-found.js');
  }

  dispatch(updatePage(page, subPage, getState().app.page));
};

const updatePage = (page, subPage, previousPage) => ({
  type: UPDATE_PAGE,
  page,
  subPage,
  previousPage,
});

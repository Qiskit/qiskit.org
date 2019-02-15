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

export const navigate = location => dispatch => {
  // Extract the page name from location.
  const page = location.route.name;

  // Any other info you might want to extract from the location (like page type),
  // you can do here
  dispatch(updatePage(page));
};

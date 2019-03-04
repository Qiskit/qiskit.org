/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

import { UPDATE_PAGE, UPDATE_DRAWER_STATE } from '../actions/app.js';

const app = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PAGE:
      return {
        ...state,
        page: action.page,
      };
    case UPDATE_DRAWER_STATE:
      return {
        ...state,
        drawerOpened: action.opened,
      };
    default:
      return state;
  }
};

export default app;

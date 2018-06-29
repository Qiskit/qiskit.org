/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

import { use } from 'i18next/dist/es/index.js';
import Backend from 'i18next-xhr-backend/dist/es/index.js';

export const i18next = use(Backend).init({
  fallbackLng: 'en',
  ns: ['app'],
  defaultNS: 'app',
  backend: {
    loadPath: 'locales/{{lng}}/{{ns}}.json',
  },
});

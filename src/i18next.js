/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

import { default as originalI18next } from 'i18next/dist/es/index.js';
import Backend from 'i18next-xhr-backend/dist/es/index.js';
import Browser from 'i18next-browser-languagedetector/dist/es/index.js';

export const i18next = originalI18next
  .use(Backend)
  .use(Browser)
  .init({
    fallbackLng: 'en',
    whitelist: ['de', 'en', 'ja'],
    ns: ['app'],
    defaultNS: 'app',
    load: 'languageOnly',
    backend: {
      loadPath: 'locales/{{lng}}/{{ns}}.json',
    },
  });

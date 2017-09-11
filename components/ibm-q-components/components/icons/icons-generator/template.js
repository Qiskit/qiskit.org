/*
 * @license
 * Copyright (c) 2017 The IBM Research authors. All rights reserved.
 * This code may only be used under the MIT style license found at https://ibmresearch.github.io/LICENSE.txt
 * The complete set of authors may be found at https://ibmresearch.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://ibmresearch.github.io/CONTRIBUTORS.txt
 */

/* eslint-env node */

'use strict';

exports.stamp = (name, size, content) => {
  return `<!--
@license
Copyright (c) 2017 The IBM Research authors. All rights reserved.
This code may only be used under the MIT style license found at https://ibmresearch.github.io/LICENSE.txt
The complete set of authors may be found at https://ibmresearch.github.io/AUTHORS.txt
The complete set of contributors may be found at https://ibmresearch.github.io/CONTRIBUTORS.txt
-->

<link rel="import" href="../../../iron-iconset-svg/iron-iconset-svg.html">

<iron-iconset-svg name="${name}" size="${size}">
  <svg>
    <defs>
${content}
    </defs>
  </svg>
</iron-iconset-svg>
`;
};

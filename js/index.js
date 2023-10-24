/*!
 * Copyright (c) 2021-2023 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const CONTEXT = require('./context');
const constants = require('./constants');
const {CONTEXT_URL, CBORLD_VALUE} = constants;

const contexts = new Map();
contexts.set(CONTEXT_URL, CONTEXT);

const appContextMap = new Map();
appContextMap.set(CONTEXT_URL, CBORLD_VALUE);

module.exports = {
  CONTEXT,
  CONTEXT_URL,
  constants,
  contexts,
  appContextMap
};

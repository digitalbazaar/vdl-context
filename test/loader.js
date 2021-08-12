/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const didKey = require('@digitalbazaar/did-method-key');
const didContext = require('did-context');
const ed25519 = require('ed25519-signature-2020-context');
const cred = require('credentials-context');
const {JsonLdDocumentLoader} = require('jsonld-document-loader');
const {CONTEXT_URL: testContextUri, CONTEXT} = require('../');

const {contexts: credentialsContext, constants: {CREDENTIALS_CONTEXT_V1_URL}} =
  cred;

const staticLoader = new JsonLdDocumentLoader();
staticLoader.addStatic(ed25519.constants.CONTEXT_URL,
  ed25519.contexts.get(ed25519.constants.CONTEXT_URL));

staticLoader.addStatic(didContext.constants.DID_CONTEXT_URL,
  didContext.contexts.get(didContext.constants.DID_CONTEXT_URL));

staticLoader.addStatic(CREDENTIALS_CONTEXT_V1_URL,
  credentialsContext.get(CREDENTIALS_CONTEXT_V1_URL));

staticLoader.addStatic(testContextUri, CONTEXT);

const didKeyDriver = didKey.driver();

const documentLoader = async url => {
  if(url && url.startsWith('did:key:')) {
    const document = await didKeyDriver.get({url});
    return {
      contextUrl: null,
      document,
      documentUrl: url,
      tag: 'static'
    };
  }

  return staticLoader.documentLoader(url);
};

module.exports = documentLoader;

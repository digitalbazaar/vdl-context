/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
const chai = require('chai');
chai.should();
const {expect} = chai;

const {contexts, constants} = require('../..');

const contextUrl = constants.CONTEXT_URL;

describe('Sign with Context', () => {

  it('contexts', async () => {
    expect(contexts.get(contextUrl)).to.have.property('@context');
  });
});

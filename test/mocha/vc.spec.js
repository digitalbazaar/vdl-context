/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
const chai = require('chai');
const didKeyDriver = require('@digitalbazaar/did-method-key').driver();
const jsigs = require('jsonld-signatures');
const documentLoader = require('../loader');
const {Ed25519Signature2020} = require('@digitalbazaar/ed25519-signature-2020');

const {purposes: {AssertionProofPurpose}} = jsigs;
chai.should();

describe('Sign with Context', () => {

  it('signs a vc that uses this context', async () => {
    const credential = {
      '@context': [
        'https://www.w3.org/2018/credentials/v1',
        'https://w3id.org/vdl/v1'
      ],
      type: [
        'VerifiableCredential',
        'Iso18013DriversLicense'
      ],
      credentialSubject: {
        id: 'did:key:z6MkrniA4wQR3eoWvpaTbCpdyjoowsRQYeXx2e3vLUp4jk4e',
        type: 'Iso18013DriversLicense',
        license: {
          type: 'Iso18013DriversLicense',
          document_number: '542426814',
          family_name: 'TURNER',
          given_name: 'SUSAN',
          portrait: '/9j/4AAQSkZJRgABAQEAkACQA...gcdgck5HtRRSClooooP/2Q==',
          birth_date: '1998-08-28',
          issue_date: '2018-01-15T10:00:00Z',
          expiry_date: '2022-08-27T12:00:00Z',
          issuing_country: 'US',
          issuing_authority: 'AL',
          un_distinguishing_sign: 'USA'
        }
      }
    };
    const {methodFor} = await didKeyDriver.generate();
    const keyPair = methodFor({purpose: 'verificationMethod'});
    const suite = new Ed25519Signature2020({key: keyPair});
    const purpose = new AssertionProofPurpose();
    const result = await jsigs.sign(credential, {
      purpose,
      documentLoader,
      suite
    });
    console.log(result);
  });
});

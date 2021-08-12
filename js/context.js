/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

module.exports = {
  '@context': {
    '@protected': true,
    id: '@id',
    type: '@type',
    license: {
      '@id': 'https://w3id.org/vdl#license',
      '@type': '@id'
    },
    Iso18013DriversLicenseCredential: 'https://w3id.org/vdl#Iso18013DriversLicenseCredential',
    Iso18013DriversLicense: {
      '@id': 'https://w3id.org/vdl#Iso18013DriversLicense',
      '@context': {
        '@protected': true,
        id: '@id',
        type: '@type',
        family_name: {
          '@id': 'https://w3id.org/vdl#family_name'
        },
        given_name: {
          '@id': 'https://w3id.org/vdl#given_name'
        },
        birth_date: {
          '@id': 'https://w3id.org/vdl#birth_date'
        },
        issue_date: {
          '@id': 'https://w3id.org/vdl#issue_date',
          '@type': 'http://www.w3.org/2001/XMLSchema#dateTime'
        },
        expiry_date: {
          '@id': 'https://w3id.org/vdl#expiry_date',
          '@type': 'http://www.w3.org/2001/XMLSchema#dateTime'
        },
        issuing_country: {
          '@id': 'https://w3id.org/vdl#issuing_country'
        },
        issuing_authority: {
          '@id': 'https://w3id.org/vdl#issuing_authority'
        },
        document_number: {
          '@id': 'https://w3id.org/vdl#document_number'
        },
        administrative_number: {
          '@id': 'https://w3id.org/vdl#administrative_number'
        },
        driving_privileges: {
          '@id': 'https://w3id.org/vdl#driving_privileges',
          '@type': '@json'
        },
        un_distinguishing_sign: {
          '@id': 'https://w3id.org/vdl#un_distinguishing_sign'
        },
        gender: {
          '@id': 'https://w3id.org/vdl#gender'
        },
        height: {
          '@id': 'https://w3id.org/vdl#height'
        },
        weight: {
          '@id': 'https://w3id.org/vdl#weight'
        },
        eye_color: {
          '@id': 'https://w3id.org/vdl#eye_color'
        },
        hair_color: {
          '@id': 'https://w3id.org/vdl#hair_color'
        },
        birth_place: {
          '@id': 'https://w3id.org/vdl#birth_place'
        },
        resident_address: {
          '@id': 'https://w3id.org/vdl#resident_address'
        },
        portrait: {
          '@id': 'https://w3id.org/vdl#portrait'
        },
        portrait_capture_date: {
          '@id': 'https://w3id.org/vdl#portrait_capture_date'
        },
        age_in_years: {
          '@id': 'https://w3id.org/vdl#age_in_years'
        },
        age_birth_year: {
          '@id': 'https://w3id.org/vdl#age_birth_year'
        },
        issuing_jurisdiction: {
          '@id': 'https://w3id.org/vdl#issuing_jurisdiction'
        },
        nationality: {
          '@id': 'https://w3id.org/vdl#nationality'
        },
        resident_city: {
          '@id': 'https://w3id.org/vdl#resident_city'
        },
        resident_state: {
          '@id': 'https://w3id.org/vdl#resident_state'
        },
        resident_postal_code: {
          '@id': 'https://w3id.org/vdl#resident_postal_code'
        },
        name_national_character: {
          '@id': 'https://w3id.org/vdl#name_national_character'
        },
        signature_usual_mark: {
          '@id': 'https://w3id.org/vdl#signature_usual_mark'
        }
      }
    }
  }
};

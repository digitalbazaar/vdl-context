/*!
 * Copyright (c) 2021-2023 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

module.exports = {
  '@context': {
    '@protected': true,
    id: '@id',
    type: '@type',
    driversLicense: {
      '@id': 'https://w3id.org/vdl#license',
      '@type': '@id'
    },
    Iso18013DriversLicenseCredential:
      'https://w3id.org/vdl#Iso18013DriversLicenseCredential',
    Iso18013DriversLicense: {
      '@id': 'https://w3id.org/vdl#Iso18013DriversLicense',
      '@context': {
        '@protected': true,
        administrative_number: 'https://w3id.org/vdl#administrativeNumber',
        age_birth_year: {
          '@id': 'https://w3id.org/vdl#ageBirthYear',
          '@type': 'http://www.w3.org/2001/XMLSchema#unsignedInt'
        },
        age_in_years: {
          '@id': 'https://w3id.org/vdl#ageInYears',
          '@type': 'http://www.w3.org/2001/XMLSchema#unsignedInt'
        },
        age_over_18: 'https://w3id.org/vdl#ageOver18',
        age_over_21: 'https://w3id.org/vdl#ageOver21',
        age_over_25: 'https://w3id.org/vdl#ageOver25',
        age_over_62: 'https://w3id.org/vdl#ageOver62',
        age_over_65: 'https://w3id.org/vdl#ageOver65',
        birth_date: {
          '@id': 'https://w3id.org/vdl#birthDate',
          '@type': 'https://www.rfc-editor.org/rfc/rfc3339#full-date'
        },
        birth_place: 'https://w3id.org/vdl#birthPlace',
        document_number: 'https://w3id.org/vdl#documentNumber',
        driving_privileges: {
          '@id': 'https://w3id.org/vdl#drivingPrivileges',
          '@type': '@json'
        },
        expiry_date: {
          '@id': 'https://w3id.org/vdl#expiryDate',
          '@type': 'https://w3id.org/vdl#date-time-or-full-date'
        },
        eye_colour: 'https://w3id.org/vdl#eyeColour',
        family_name: 'https://w3id.org/vdl#familyName',
        family_name_national_character:
          'https://w3id.org/vdl#familyNameNationalCharacter',
        given_name: 'https://w3id.org/vdl#givenName',
        given_name_national_character:
          'https://w3id.org/vdl#givenNameNationalCharacter',
        hair_colour: 'https://w3id.org/vdl#hairColour',
        height: {
          '@id': 'https://w3id.org/vdl#height',
          '@type': 'http://www.w3.org/2001/XMLSchema#unsignedInt'
        },
        issue_date: {
          '@id': 'https://w3id.org/vdl#issueDate',
          '@type': 'https://w3id.org/vdl#date-time-or-full-date'
        },
        issuing_authority: 'https://w3id.org/vdl#issuingAuthority',
        issuing_country: 'https://w3id.org/vdl#issuingCountry',
        issuing_jurisdiction: 'https://w3id.org/vdl#issuingJurisdiction',
        nationality: 'https://w3id.org/vdl#nationality',
        portrait: {
          '@id': 'https://w3id.org/vdl#portrait',
          '@type': 'http://www.w3.org/2001/XMLSchema#base64Binary'
        },
        portrait_capture_date: {
          '@id': 'https://w3id.org/vdl#portraitCaptureDate',
          '@type': 'https://www.rfc-editor.org/rfc/rfc3339#date-time'
        },
        resident_address: 'https://w3id.org/vdl#residentAddress',
        resident_city: 'https://w3id.org/vdl#residentCity',
        resident_country: 'https://w3id.org/vdl#residentCountry',
        resident_postal_code: 'https://w3id.org/vdl#residentPostalCode',
        resident_state: 'https://w3id.org/vdl#residentState',
        sex: {
          '@id': 'https://w3id.org/vdl#sex',
          '@type': 'http://www.w3.org/2001/XMLSchema#unsignedInt'
        },
        signature_usual_mark: {
          '@id': 'https://w3id.org/vdl#signatureUsualMark',
          '@type': 'http://www.w3.org/2001/XMLSchema#base64Binary'
        },
        un_distinguishing_sign: 'https://w3id.org/vdl#unDistinguishingSign',
        weight: {
          '@id': 'https://w3id.org/vdl#weight',
          '@type': 'http://www.w3.org/2001/XMLSchema#unsignedInt'
        }
      }
    }
  }
};

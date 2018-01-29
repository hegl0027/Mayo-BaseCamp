# Working with FHIR data
- [hl7.org - FHIR specification](https://www.hl7.org/fhir/)

## FHIR Resources
- Patient Resource: https://www.hl7.org/fhir/patient.html
  - Partial interface from __src/app/patient-list/store/patient-list.state.ts__
  ```js
  export interface Patient {
    _updated: string;
    resource: {
      name: [{given: string[], family: string}];
      identifier: [{value: number}];
      birthDate: string,
      gender: string,
    }
  }
  ```

import { Injectable } from '@angular/core';

import { FhirDataService } from './fhir-data.service';

import { observations19300100 } from './dev-data/observations19300100';
import { observations19300101 } from './dev-data/observations19300101';

@Injectable()
export class FhirDataDevService implements FhirDataService {

  constructor() { }

  getObservations(id: string) {
    let observations;
    switch (id) {
      case "19300100": {
        observations = JSON.parse(observations19300100).entry;
        break;
      }
      case "19300101": {
        observations = JSON.parse(observations19300101).entry;
        break;
      }
      default: {
        observations = [];
      }
    }
    return Promise.resolve(observations);
  }

}

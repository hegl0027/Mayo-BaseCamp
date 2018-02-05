import { Injectable, InjectionToken } from '@angular/core';

export interface FhirDataService {
  getObservations(id: string): Promise<any>;
}

export const FHIR_DATA_SERVICE = new InjectionToken<FhirDataService>('FhirDataService');

@Injectable()
export class FhirDataMayoService implements FhirDataService {

  constructor() { }

  getObservations(id: string) {
    return Promise.resolve({});

  }

}

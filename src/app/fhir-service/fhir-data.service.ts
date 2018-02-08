import { Injectable, InjectionToken } from '@angular/core';

import { HttpClient } from '@angular/common/http';

export interface FhirDataService {
  getObservations(id: string): Promise<any>;
  getConditions(id: string): Promise<any>;
}

export const FHIR_DATA_SERVICE = new InjectionToken<FhirDataService>('FhirDataService');

@Injectable()
export class FhirDataMayoService implements FhirDataService {

  constructor(private httpService: HttpClient) { }

  getObservations(id: string) {
    const url = `https://pepdev.apimc.mayo.edu/innovationsandboxsyntheticfhir/v1/Observation?Patient=${id}`;
    return this.getResource(url);
  }

  getConditions(id: string) {
    const url = `https://pepdev.apimc.mayo.edu/innovationsandboxsyntheticfhir/v1/Condition?Patient=${id}`;
    return this.getResource(url);
  }

  private getResource(url: string) {
    const options = {
      headers: {
        "Authorization": "Atmosphere atmosphere_app_id=MayoAPI-1w9PyAs07jd5ESVCcibV9s5Z",
        "Accept": "application/json"
      }
    }
    return this.httpService.request("get", url, options)
      .map((response: any) => {
        return response.entry;
      }).toPromise();
  }
}

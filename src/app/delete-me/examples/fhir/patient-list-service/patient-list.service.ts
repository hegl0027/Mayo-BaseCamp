import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Patient } from '../patient-list/store';
import { Observable } from 'rxjs/Observable';

export interface PatientListServiceInterface {
  getPatientList(any): Observable<any>;
}

export const PATIENT_LIST_SERVICE = new InjectionToken<PatientListServiceInterface>('PatientListServiceInterface');

@Injectable()
export class PatientListService {

  constructor(private httpService: HttpClient) { }

  public getPatientList(list) {
    return this.getAllPatients(list);
  }

  private async getAllPatients(pl: any) {
    const patientList = await Promise.all(pl.map((p) => {
      const url = `https://pepdev.apimc.mayo.edu/innovationsandboxsyntheticfhir/v1/Patient/${p}`;
      const options = {
        headers: {
          "Authorization": "Atmosphere atmosphere_app_id=MayoAPI-1w9PyAs07jd5ESVCcibV9s5Z",
          "Accept": "application/json"
        }
      }
      return this.httpService.request("get", url, options)
        .map((response: any) => {
          return response;
        }).toPromise();
    }))
    return patientList;
  }
}

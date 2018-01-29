import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Patient } from '../patient-list/store';
import { Observable } from 'rxjs/Observable';

export interface PatientListServiceInterface {
  getPatientList(): Observable<any>;
}

export const PATIENT_LIST_SERVICE = new InjectionToken<PatientListServiceInterface>('PatientListServiceInterface');

@Injectable()
export class PatientListService {

  constructor(private httpService: HttpClient) { }

  public getPatientList() {
    return this.httpService.request("get", "http://dlmdev:5000/testpatient", {})
      .map((response: any) => {
        return response._items;
      }).toPromise();
  }

}

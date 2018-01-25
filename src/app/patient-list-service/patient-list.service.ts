import { Injectable, InjectionToken } from '@angular/core';
import { Http, Response } from '@angular/http';
//import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Patient } from '../patient-list/ngrx-store';
import { Observable } from 'rxjs/Observable';

export interface PatientListServiceInterface {
  getPatientList(): Observable<any>;
}

export const PATIENT_LIST_SERVICE = new InjectionToken<PatientListServiceInterface>('PatientListServiceInterface');

@Injectable()
export class PatientListService {

  constructor(private httpService: Http) { }

  public getPatientList() {
    return this.httpService.get("http://dlmdev:5000/testpatient", {})
      .map((response: Response) => {
        return response.json()._items;
      });
  }

}

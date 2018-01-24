import { Injectable, InjectionToken } from '@angular/core';
import { Http, Response } from '@angular/http';
//import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Patient } from '../patient-list/ngrx-store';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

export interface PatientListServiceInterface {
  getPatientList(): Observable<any>;
  getPatientListCa(): Observable<any>;
}

export const PATIENT_LIST_SERVICE = new InjectionToken<PatientListServiceInterface>('PatientListServiceInterface');

@Injectable()
export class PatientListService {

  constructor(private httpService: Http) { }

  public getPatientList() {
    return Observable.of([
      {
        name: "Some Test Patient one",
        mrn: 123,
        birthdate: "Jan-12-1920",
        age: 98
      },
      {
        name: "Some Test Patient Two",
        birthdate: "Jan-12-1920",
        mrn: 123321,
        age: 98
      },
    ] as Patient[]);
  }

  public getPatientListCa() {
    return this.httpService.get("http://fhirtest.uhn.ca/baseDstu3/Patient/7238", {})
      .map((response: Response) => {
        return response.json()._items;
      });
  }

}

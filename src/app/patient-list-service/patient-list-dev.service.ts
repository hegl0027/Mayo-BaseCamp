import { Injectable, InjectionToken } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Patient } from '../patient-list/store';
import { Observable } from 'rxjs/Observable';

import { PatientListServiceInterface } from './patient-list.service';

export const PATIENT_LIST_SERVICE = new InjectionToken<PatientListServiceInterface>('PatientListServiceInterface');

@Injectable()
export class PatientListDevService implements PatientListServiceInterface {

  constructor() { }

  public getPatientList() {
    return Observable.of([
      {
        _updated: 'Jan-20-2018',
        resource: {
          name: [{given: ['Test'], family: 'MacPatient'}],
          identifier: [{value: 123}],
          birthDate: "Jan-12-1920",
          gender: 'male',
        }
      },
      {
        _updated: 'Feb-18-2017',
        resource: {
          name: [{given: ['Test'], family: 'Patient2'}],
          identifier: [{value: 321}],
          birthDate: "Jan-12-1955",
          gender: 'female',
        }
      },
    ] as Patient[]);
  }
}

import * as td from 'testdouble';
import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { PatientListService } from './patient-list.service';
import * as patientList from '../patient-list/store';

describe('PatientListService', () => {
  let service = {} as PatientListService;
  let mockHttp = {} as HttpClient;
  beforeEach(() => {
    mockHttp = {
      request: td.function() as (method: string, url: string, options?: string) => any,
    } as HttpClient;

    service = new PatientListService(mockHttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should should test getPatientList()', (done) => {
    let items = [];
    let mockResponse = {
      _items: items 
    } as any;
    td.when(mockHttp.request(td.matchers.anything(), td.matchers.anything(), td.matchers.anything()))
      .thenReturn(Observable.of(mockResponse));

    service.getPatientList()
      .then((patientList: any) => {
        expect(patientList).toEqual(items);
        done();
      });
  });
});

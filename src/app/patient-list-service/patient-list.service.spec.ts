import * as td from 'testdouble';
import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { PatientListService } from './patient-list.service';
import * as patientList from '../patient-list/ngrx-store';

fdescribe('PatientListService', () => {
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
      body: {
        _items: items 
      }
    } as HttpResponse<any>;
    td.when(mockHttp.request(td.matchers.anything(), td.matchers.anything(), td.matchers.anything()))
      .thenReturn(Observable.of(mockResponse));

    service.getPatientList()
      .then((patientList: any) => {
        expect(patientList).toEqual(items);
        done();
      });
  });
});

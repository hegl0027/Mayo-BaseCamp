import * as td from 'testdouble';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { FhirDataMayoService } from './fhir-data.service';

describe('FhirDataMayoService', () => {
  let service = {} as FhirDataMayoService;
  let mockHttp = {} as HttpClient;

  beforeEach(() => {
    mockHttp = {
      request: td.function() as (method: string, url: string, options?: string) => any,
    } as HttpClient;

    service = new FhirDataMayoService(mockHttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

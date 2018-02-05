import { TestBed, inject } from '@angular/core/testing';

import { FhirDataService } from './fhir-data.service';

describe('FhirDataService', () => {
  let service = {} as FhirDataService;

  beforeEach(() => {
    service = new FhirDataService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

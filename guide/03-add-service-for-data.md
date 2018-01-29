# Adding a Service to get data

|  Step  |  Description  |
| ------ |  -----------  |
| 01 - A new Service | Token, interface, functions
| 02 - Making the service injectable by using an [InjectionToken](https://angular.io/api/core/InjectionToken) |
| 03 - Providing the service to other components/modules/etc | Provide the service in a module (dev/int/prod differences) Injection by token
| 04 - Modify the Service to make an Http call |
| 05 - Testing the Service |

In this file `patient-list.service.ts` will be used as an example of the steps taken. The service eventually will provide data to the `patient-list.component.ts` Component

## 01 - A new Service

A Service can be generated using the ng generate command:

`ng generate service patient-list-service/patient-list` 
or
`ng g s patient-list-service/patient-list`

This will create a directory at src/app/patient-list-service containing the following files:

|  File  |  Description  |
| ------ |  -----------  |
| 01 - patient-list.service.ts | A default template for the service. |
| 02 - patient-list.service.spec.ts | A default template for the service test. |

While the files are generated, the service will need to be imported into the desired __module__ (app.module.ts in this case), and listed as a provider.

## 02 - Making the service injectable by using an [InjectionToken](https://angular.io/api/core/InjectionToken)
Using an __InjectionToken__ lets us reference the service indirectly. We can use the token in our components or modules as a placeholder for which service we use.  Then, in the `app.module.ts`, when we `provide` a service for that InjectionToken, the service will be used in any place that the token was referenced.

One benefit of doing this is the ability to easily provide different services for different environments (or for using a mock service in development).

[write about using an Interface as a contract for multiple implementations of a service]

## 03 - Providing the service to other components/modules/etc.
[TODO: Providing the Service in `app.module.ts`]

If the service is provided in a parent module (`providers: []`), then it will be available to the component.

Import it:
```
import { PATIENT_LIST_SERVICE, PatientListServiceInterface } from '../../patient-list-service/patient-list.service';
```

Use it: `@Inject` the Token in the constructor.

```js
  constructor(
    @Inject(PATIENT_LIST_SERVICE) private patientListService: PatientListServiceInterface
  ) { }
```

## 04 - Modify the Service to make an Http call
### app/patient-list-service/patient-list.service.ts

```js
import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Patient } from '../patient-list/ngrx-store';
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
```

In the constructor for this service, Angular's HttpClient is injected as `httpService`. `httpService` is used to make the http request. The only function defined by this service is `getPatientList` which makes a GET request to an endpoint that should provide an array of FHIR 'Patient' Resources.

The request returns an [Observable](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html) that contains the array of Patients. The Observable is converted to a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which can be used directly or re-converted to another Observable.

## 05 - Testing the Service
Because the service can be written purely in TypeScript / JavaScript, testing a service can be easier than testing a component (since we don't need to provide an angular testing module).

We still need to provide any services that the service depends on (has injected). We will provide mocked versions of those, so that we can control all the behavior that isn't being tested.

### src/app/patient-list-service/patient-list.service.spec.ts
```js
import * as td from 'testdouble';
import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { PatientListService } from './patient-list.service';
import * as patientList from '../patient-list/ngrx-store';

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
```

There are two tests in this file.

Many spec files start with the _first test_, this is mostly a sanity check, to make sure that the component/service/class exists.

The _second test_ has a mock http service, in the mock, we return a response that we define (and would be similar to what the real response could look like, either passing or failing).
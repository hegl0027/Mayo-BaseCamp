import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { LOAD_PATIENT_LIST, PatientListLoadedAction } from "./patient-list.actions";
import { Patient } from "./patient-list.state";

@Injectable()
export class PatientListEffects {
  constructor(private action$: Actions) { }

  @Effect()
  public patientList$ = this.action$.ofType(LOAD_PATIENT_LIST)
    .switchMap(() => {
      console.log("Load Patient Action")
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
    })
    .map((patientList) => new PatientListLoadedAction({ patients: patientList }));
}
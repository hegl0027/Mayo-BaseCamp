import { Injectable, Inject } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { PATIENT_LIST_SERVICE, PatientListServiceInterface } from '../../patient-list-service/patient-list.service';
import { LOAD_PATIENT_LIST, PatientListLoadedAction } from "./patient-list.actions";
import { Patient } from "./patient-list.state";

@Injectable()
export class PatientListEffects {
  constructor(
    private action$: Actions,
    @Inject(PATIENT_LIST_SERVICE) private patientListService: PatientListServiceInterface
  ) { }

  @Effect()
  public patientList$ = this.action$.ofType(LOAD_PATIENT_LIST)
    .switchMap(() => {
      return this.patientListService.getPatientList();
    })
    .map((patientList) => new PatientListLoadedAction({ patients: patientList }));
}

import { Injectable, Inject } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";

import { data } from '../observations';
import { 
  LOAD_OBSERVATIONS_FOR_PATIENT, LoadObservationsForPatientAction,
  OBSERVATIONS_FOR_PATIENT_LOADED, ObservationsForPatientLoadedAction,
} from './patient-observations.actions';

@Injectable()
export class PatientObservationEffects {
  constructor(
    private action$: Actions,
  ) { }

  @Effect()
  public patientObservations$ = this.action$.ofType(LOAD_OBSERVATIONS_FOR_PATIENT)
    .map((a: LoadObservationsForPatientAction) => {
      console.log("load patient obs: ", a.payload);
      return JSON.parse(data).entry;
    })
    .map((obs) => new ObservationsForPatientLoadedAction(obs));
}

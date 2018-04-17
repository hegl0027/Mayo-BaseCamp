import { Injectable, Inject } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromPromise';

import { 
  LOAD_OBSERVATIONS_FOR_PATIENT, LoadObservationsForPatientAction,
  OBSERVATIONS_FOR_PATIENT_LOADED, ObservationsForPatientLoadedAction,
} from './patient-observations.actions';
import { FHIR_DATA_SERVICE, FhirDataService } from '../../fhir-service/fhir-data.service'

@Injectable()
export class PatientObservationEffects {
  constructor(
    private action$: Actions,
    @Inject(FHIR_DATA_SERVICE) private patObservations: FhirDataService,
  ) { }

  @Effect()
  public patientObservations$ = this.action$.ofType(LOAD_OBSERVATIONS_FOR_PATIENT)
    .switchMap((a: LoadObservationsForPatientAction) => {
      console.log("load patient obs: ", a.payload);
      return Observable.fromPromise(this.patObservations.getObservations(a.payload));
    })
    .map((obs) => new ObservationsForPatientLoadedAction(obs));
}

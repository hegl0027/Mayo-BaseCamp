import { Injectable, Inject } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromPromise';

import { 
  LOAD_CONDITIONS_FOR_PATIENT, LoadConditionsForPatientAction,
  CONDITIONS_FOR_PATIENT_LOADED, ConditionsForPatientLoadedAction,
} from './patient-conditions.actions';
import { FHIR_DATA_SERVICE, FhirDataService } from '../../fhir-service/fhir-data.service'

@Injectable()
export class PatientConditionEffects {
  constructor(
    private action$: Actions,
    @Inject(FHIR_DATA_SERVICE) private fhirDataService: FhirDataService,
  ) { }

  @Effect()
  public patientConditions$ = this.action$.ofType(LOAD_CONDITIONS_FOR_PATIENT)
    .switchMap((a: LoadConditionsForPatientAction) => {
      return Observable.fromPromise(this.fhirDataService.getConditions(a.payload));
    })
    .map((res) => new ConditionsForPatientLoadedAction(res));
}

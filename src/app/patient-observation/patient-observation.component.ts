import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as state from '../state/app-state';

import { LoadObservationsForPatientAction , LOAD_OBSERVATIONS_FOR_PATIENT } from './store/patient-observations.actions';

@Component({
  selector: 'app-patient-observation',
  templateUrl: './patient-observation.component.html',
  styleUrls: ['./patient-observation.component.scss']
})
export class PatientObservationComponent implements OnInit {
  patientList$: Observable<any>;
  selectedPatient$: Observable<any>;
  observation$: Observable<any>;

  constructor(private store: Store<state.AppState>) {
    this.selectedPatient$ = Observable.of("Test A. Patient");
    this.patientList$ = Observable.of([
      {identifier: "19300100"},
      {identifier: "19300101"},
      {identifier: "19300102"},
      {identifier: "19300103"},
      {identifier: "19300104"},
      {identifier: "19300105"},
      {identifier: "19300106"},
      {identifier: "19300107"},
      {identifier: "19300108"},
      {identifier: "19300109"},
      {identifier: "19300110"},
    ]);
    this.observation$ = this.store.select(state.getPatientObservations);
  }

  ngOnInit() {
  }

  getPatientObservations(patientMrn: string) {
    this.store.dispatch(new LoadObservationsForPatientAction(patientMrn));
  }
}

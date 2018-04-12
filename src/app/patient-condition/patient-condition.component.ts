import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as state from '../state/app-state';

import { LoadConditionsForPatientAction } from './store/patient-conditions.actions';

@Component({
  selector: 'app-patient-condition',
  templateUrl: './patient-condition.component.html',
  styleUrls: ['./patient-condition.component.scss']
})
export class PatientConditionComponent implements OnInit {
  patientList$: Observable<any>;
  condition$: Observable<any>;

  constructor(private store: Store<state.AppState>) {
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
    this.condition$ = this.store.select(state.getPatientConditions);
  }

  ngOnInit() {
  }

  getPatientObservations(patientMrn: string) {
    this.store.dispatch(new LoadConditionsForPatientAction(patientMrn));
  }
}

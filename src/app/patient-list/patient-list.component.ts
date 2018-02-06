import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { LoadPatientListAction, LOAD_PATIENT_LIST } from './store/patient-list.actions';

import * as state from '../app-state';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  patientList$: Observable<any>;

  constructor(private store: Store<state.AppState>) { 
    this.patientList$ = this.store.select(state.getPatientList);
  }

  ngOnInit() {
    this.userLogin();
  }

  userLogin() {
    this.store.dispatch({ type: LOAD_PATIENT_LIST });
  }
}

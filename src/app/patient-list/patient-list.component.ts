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
    let list = [19300100, 19300101, 19300102, 19300103];
    this.store.dispatch(new LoadPatientListAction(list));
  }
}

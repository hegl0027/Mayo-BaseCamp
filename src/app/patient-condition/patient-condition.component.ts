import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as state from '../app-state';

@Component({
  selector: 'app-patient-condition',
  templateUrl: './patient-condition.component.html',
  styleUrls: ['./patient-condition.component.scss']
})
export class PatientConditionComponent implements OnInit {
  patientList: Array<any>;

  constructor(private store: Store<state.AppState>) { 
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { data } from './observations';

@Component({
  selector: 'app-patient-observation',
  templateUrl: './patient-observation.component.html',
  styleUrls: ['./patient-observation.component.scss']
})
export class PatientObservationComponent implements OnInit {
  patientList$: Observable<any>;
  selectedPatient$: Observable<any>;
  observation$: Observable<any>;

  constructor() {
    this.selectedPatient$ = Observable.of("Test A. Patient");
    this.observation$ = Observable.of(JSON.parse(data).entry);
  }

  ngOnInit() {
  }

}

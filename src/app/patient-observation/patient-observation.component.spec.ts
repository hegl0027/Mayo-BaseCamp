import { Store } from '@ngrx/store';
import * as td from 'testdouble'; 
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import * as fromRoot from '../app-state';
import { PatientObservationComponent } from './patient-observation.component';

describe('PatientObservationComponent', () => {
  let component: PatientObservationComponent;
  let fixture: ComponentFixture<PatientObservationComponent>;

  let mockStore = {};

  beforeEach(async(() => {
    mockStore = {
      select: td.function('.select'),
      dispatch: td.function('.dispatch')
    } as Store<fromRoot.AppState>;

    TestBed.configureTestingModule({
      declarations: [ PatientObservationComponent ],
      providers: [
        { provide: Store, useFactory: () => mockStore },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Store } from '@ngrx/store';
import * as td from 'testdouble';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import * as fromRoot from '../state/app-state';
import { PatientConditionComponent } from './patient-condition.component';

describe('PatientConditionComponent', () => {
  let component: PatientConditionComponent;
  let fixture: ComponentFixture<PatientConditionComponent>;

  let mockStore = {};

  beforeEach(async(() => {
    mockStore = {
      select: td.function('.select'),
      dispatch: td.function('.dispatch')
    } as Store<fromRoot.AppState>;

    TestBed.configureTestingModule({
      declarations: [ PatientConditionComponent ],
      providers: [
        { provide: Store, useFactory: () => mockStore },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

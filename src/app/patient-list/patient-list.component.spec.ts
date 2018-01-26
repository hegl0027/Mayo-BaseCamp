import { Store } from '@ngrx/store';
import * as td from 'testdouble'; 
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import * as fromRoot from '../common/app-state';
import { PatientListComponent } from './patient-list.component';

describe('PatientListComponent', () => {
  let component: PatientListComponent;
  let fixture: ComponentFixture<PatientListComponent>;

  let mockStore = {};

  beforeEach(async(() => {
    mockStore = {
      select: td.function('.select'),
      dispatch: td.function('.dispatch')
    } as Store<fromRoot.AppState>;

    TestBed.configureTestingModule({
      declarations: [ PatientListComponent ],
      providers: [
        { provide: Store, useFactory: () => mockStore },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

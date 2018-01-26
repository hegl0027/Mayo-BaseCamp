import { Store } from '@ngrx/store';
import * as td from 'testdouble'; 
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import * as fromRoot from '../common/app-state';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  let mockStore = {};

  beforeEach(async(() => {
    mockStore = {
      select: td.function('.select'),
      dispatch: td.function('.dispatch')
    } as Store<fromRoot.AppState>;

    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [
        { provide: Store, useFactory: () => mockStore },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

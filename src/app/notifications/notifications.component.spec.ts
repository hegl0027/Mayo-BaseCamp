import { Store } from '@ngrx/store';
import * as td from 'testdouble'; 
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import * as fromRoot from '../app-state';
import { NotificationsComponent } from './notifications.component';

describe('NotificationsComponent', () => {
  let component: NotificationsComponent;
  let fixture: ComponentFixture<NotificationsComponent>;

  let mockStore = {};

  beforeEach(async(() => {
    mockStore = {
      select: td.function('.select'),
      dispatch: td.function('.dispatch')
    } as Store<fromRoot.AppState>;

    TestBed.configureTestingModule({
      declarations: [ NotificationsComponent ],
      providers: [
        { provide: Store, useFactory: () => mockStore },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

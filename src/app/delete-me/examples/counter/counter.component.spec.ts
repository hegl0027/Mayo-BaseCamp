import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { HighlightModule } from 'ngx-highlightjs';
import { Observable } from 'rxjs/Observable';
import { AppState, getCurrentCount } from '../../../state/app-state';
import { Store } from '@ngrx/store';
import * as td from 'testdouble';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let mockStore: Store<AppState>;

  beforeEach(async(() => {
    mockStore = {
      select: td.function('.select'),
      dispatch: td.function('.dispatch')
    } as Store<AppState>;

    td.when(mockStore.select(getCurrentCount))
      .thenReturn(Observable.of(1));

    TestBed.configureTestingModule({
      declarations: [ CounterComponent ],
      imports: [HighlightModule.forRoot({ theme: 'vs'})],
      providers: [
        {provide: Store, useFactory: () => mockStore}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

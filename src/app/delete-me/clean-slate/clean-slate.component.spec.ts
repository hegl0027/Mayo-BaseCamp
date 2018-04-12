import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanSlateComponent } from './clean-slate.component';
import { HighlightModule } from 'ngx-highlightjs';

describe('CleanSlateComponent', () => {
  let component: CleanSlateComponent;
  let fixture: ComponentFixture<CleanSlateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanSlateComponent ],
      imports: [HighlightModule.forRoot({theme: 'vs' })]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanSlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

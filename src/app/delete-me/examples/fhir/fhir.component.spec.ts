import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FhirComponent } from './fhir.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FhirComponent', () => {
  let component: FhirComponent;
  let fixture: ComponentFixture<FhirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FhirComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FhirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

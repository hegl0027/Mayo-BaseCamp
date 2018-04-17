import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDependencyChainComponent } from './data-dependency-chain.component';

describe('DataDependencyChainComponent', () => {
  let component: DataDependencyChainComponent;
  let fixture: ComponentFixture<DataDependencyChainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDependencyChainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDependencyChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

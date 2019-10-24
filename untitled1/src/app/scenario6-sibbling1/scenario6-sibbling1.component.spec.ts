import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario6Sibbling1Component } from './scenario6-sibbling1.component';

describe('Scenario6Sibbling1Component', () => {
  let component: Scenario6Sibbling1Component;
  let fixture: ComponentFixture<Scenario6Sibbling1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario6Sibbling1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario6Sibbling1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

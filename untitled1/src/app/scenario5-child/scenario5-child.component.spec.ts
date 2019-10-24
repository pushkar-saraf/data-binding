import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario5ChildComponent } from './scenario5-child.component';

describe('Scenario5ChildComponent', () => {
  let component: Scenario5ChildComponent;
  let fixture: ComponentFixture<Scenario5ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario5ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario5ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

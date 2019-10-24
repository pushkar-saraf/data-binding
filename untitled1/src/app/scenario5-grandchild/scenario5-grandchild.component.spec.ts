import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario5GrandchildComponent } from './scenario5-grandchild.component';

describe('Scenario5GrandchildComponent', () => {
  let component: Scenario5GrandchildComponent;
  let fixture: ComponentFixture<Scenario5GrandchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario5GrandchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario5GrandchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

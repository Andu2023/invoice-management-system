import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdroalForEmployeeComponent } from './withdroal-for-employee.component';

describe('WithdroalForEmployeeComponent', () => {
  let component: WithdroalForEmployeeComponent;
  let fixture: ComponentFixture<WithdroalForEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WithdroalForEmployeeComponent]
    });
    fixture = TestBed.createComponent(WithdroalForEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

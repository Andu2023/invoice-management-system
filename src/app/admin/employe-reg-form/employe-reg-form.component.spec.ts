import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeRegFormComponent } from './employe-reg-form.component';

describe('EmployeRegFormComponent', () => {
  let component: EmployeRegFormComponent;
  let fixture: ComponentFixture<EmployeRegFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeRegFormComponent]
    });
    fixture = TestBed.createComponent(EmployeRegFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

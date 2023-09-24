import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForEmployeeComponent } from './for-employee.component';

describe('ForEmployeeComponent', () => {
  let component: ForEmployeeComponent;
  let fixture: ComponentFixture<ForEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForEmployeeComponent]
    });
    fixture = TestBed.createComponent(ForEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

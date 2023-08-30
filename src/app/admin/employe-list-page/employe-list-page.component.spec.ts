import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeListPageComponent } from './employe-list-page.component';

describe('EmployeListPageComponent', () => {
  let component: EmployeListPageComponent;
  let fixture: ComponentFixture<EmployeListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeListPageComponent]
    });
    fixture = TestBed.createComponent(EmployeListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

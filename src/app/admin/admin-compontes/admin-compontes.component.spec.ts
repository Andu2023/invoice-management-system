import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompontesComponent } from './admin-compontes.component';

describe('AdminCompontesComponent', () => {
  let component: AdminCompontesComponent;
  let fixture: ComponentFixture<AdminCompontesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCompontesComponent]
    });
    fixture = TestBed.createComponent(AdminCompontesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

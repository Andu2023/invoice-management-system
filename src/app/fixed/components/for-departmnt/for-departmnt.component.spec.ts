import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForDepartmntComponent } from './for-departmnt.component';

describe('ForDepartmntComponent', () => {
  let component: ForDepartmntComponent;
  let fixture: ComponentFixture<ForDepartmntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForDepartmntComponent]
    });
    fixture = TestBed.createComponent(ForDepartmntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

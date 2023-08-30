import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusStoredMaterialComponent } from './status-stored-material.component';

describe('StatusStoredMaterialComponent', () => {
  let component: StatusStoredMaterialComponent;
  let fixture: ComponentFixture<StatusStoredMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatusStoredMaterialComponent]
    });
    fixture = TestBed.createComponent(StatusStoredMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllMaterialComponent } from './view-all-material.component';

describe('ViewAllMaterialComponent', () => {
  let component: ViewAllMaterialComponent;
  let fixture: ComponentFixture<ViewAllMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllMaterialComponent]
    });
    fixture = TestBed.createComponent(ViewAllMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

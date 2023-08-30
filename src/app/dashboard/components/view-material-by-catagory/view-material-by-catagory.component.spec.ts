import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMaterialByCatagoryComponent } from './view-material-by-catagory.component';

describe('ViewMaterialByCatagoryComponent', () => {
  let component: ViewMaterialByCatagoryComponent;
  let fixture: ComponentFixture<ViewMaterialByCatagoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMaterialByCatagoryComponent]
    });
    fixture = TestBed.createComponent(ViewMaterialByCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

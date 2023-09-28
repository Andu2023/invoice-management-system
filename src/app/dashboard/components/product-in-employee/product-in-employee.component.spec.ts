import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInEmployeeComponent } from './product-in-employee.component';

describe('ProductInEmployeeComponent', () => {
  let component: ProductInEmployeeComponent;
  let fixture: ComponentFixture<ProductInEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductInEmployeeComponent]
    });
    fixture = TestBed.createComponent(ProductInEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

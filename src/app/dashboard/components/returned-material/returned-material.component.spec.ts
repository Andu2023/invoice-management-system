import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnedMaterialComponent } from './returned-material.component';

describe('ReturnedMaterialComponent', () => {
  let component: ReturnedMaterialComponent;
  let fixture: ComponentFixture<ReturnedMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnedMaterialComponent]
    });
    fixture = TestBed.createComponent(ReturnedMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

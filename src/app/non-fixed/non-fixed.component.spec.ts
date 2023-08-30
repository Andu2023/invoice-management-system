import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonFixedComponent } from './non-fixed.component';

describe('NonFixedComponent', () => {
  let component: NonFixedComponent;
  let fixture: ComponentFixture<NonFixedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonFixedComponent]
    });
    fixture = TestBed.createComponent(NonFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

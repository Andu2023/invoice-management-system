import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdroalFormComponent } from './withdroal-form.component';

describe('WithdroalFormComponent', () => {
  let component: WithdroalFormComponent;
  let fixture: ComponentFixture<WithdroalFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WithdroalFormComponent]
    });
    fixture = TestBed.createComponent(WithdroalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

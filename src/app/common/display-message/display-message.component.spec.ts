import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMessageComponent } from './display-message.component';

describe('DisplayMessageComponent', () => {
  let component: DisplayMessageComponent;
  let fixture: ComponentFixture<DisplayMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayMessageComponent]
    });
    fixture = TestBed.createComponent(DisplayMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

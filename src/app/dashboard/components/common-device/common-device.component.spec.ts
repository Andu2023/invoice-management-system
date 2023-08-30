import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDeviceComponent } from './common-device.component';

describe('CommonDeviceComponent', () => {
  let component: CommonDeviceComponent;
  let fixture: ComponentFixture<CommonDeviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonDeviceComponent]
    });
    fixture = TestBed.createComponent(CommonDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferPageComponent } from './transfer-page.component';

describe('TransferPageComponent', () => {
  let component: TransferPageComponent;
  let fixture: ComponentFixture<TransferPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferPageComponent]
    });
    fixture = TestBed.createComponent(TransferPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBuyItemComponent } from './view-buy-item.component';

describe('ViewBuyItemComponent', () => {
  let component: ViewBuyItemComponent;
  let fixture: ComponentFixture<ViewBuyItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBuyItemComponent]
    });
    fixture = TestBed.createComponent(ViewBuyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

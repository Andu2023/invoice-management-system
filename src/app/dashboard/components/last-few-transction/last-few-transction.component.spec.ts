import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastFewTransctionComponent } from './last-few-transction.component';

describe('LastFewTransctionComponent', () => {
  let component: LastFewTransctionComponent;
  let fixture: ComponentFixture<LastFewTransctionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastFewTransctionComponent]
    });
    fixture = TestBed.createComponent(LastFewTransctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

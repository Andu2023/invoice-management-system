import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNaveComponent } from './side-nave.component';

describe('SideNaveComponent', () => {
  let component: SideNaveComponent;
  let fixture: ComponentFixture<SideNaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideNaveComponent]
    });
    fixture = TestBed.createComponent(SideNaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

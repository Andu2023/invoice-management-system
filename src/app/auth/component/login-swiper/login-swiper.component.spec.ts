import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSwiperComponent } from './login-swiper.component';

describe('LoginSwiperComponent', () => {
  let component: LoginSwiperComponent;
  let fixture: ComponentFixture<LoginSwiperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginSwiperComponent]
    });
    fixture = TestBed.createComponent(LoginSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

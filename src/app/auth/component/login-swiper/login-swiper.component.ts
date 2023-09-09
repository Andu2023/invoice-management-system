import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-login-swiper',
  templateUrl: './login-swiper.component.html',
  styleUrls: ['./login-swiper.component.css']
})
export class LoginSwiperComponent implements AfterViewInit {
  ngAfterViewInit() {
    new Swiper('.swiper-container', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }
}

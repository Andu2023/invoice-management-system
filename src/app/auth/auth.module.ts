import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';


import { TransferFormComponent } from './components/transfer-form/transfer-form.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginSwiperComponent } from './component/login-swiper/login-swiper.component';


@NgModule({
  declarations: [
    AuthComponent,
  

    TransferFormComponent,
    LoginPageComponent,
    LoginSwiperComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ]
})
export class AuthModule { }

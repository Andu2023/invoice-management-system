import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPageComponent } from './common/header-page/header-page.component';
import { FooterPageComponent } from './common/footer-page/footer-page.component';
import { HomePageComponent } from './common/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FixedModule } from './fixed/fixed.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { MaterialModule } from './Material/MaterialModule';
import { DashboardModule } from './dashboard/dashboard.module';
import { MatStepperModule } from '@angular/material/stepper';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { SwiperComponent } from './swiper/swiper.component';
import { NgToastModule } from 'ng-angular-popup';
import { ContactFormComponent } from './common/contact-form/contact-form.component';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { DisplayMessageComponent } from './common/display-message/display-message.component';
import { NonFixedModule } from './non-fixed/non-fixed.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderPageComponent,
    FooterPageComponent,
    HomePageComponent,
    SwiperComponent,
    ContactFormComponent,
    DisplayMessageComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FixedModule,
    AuthModule,
    AdminModule,
    HttpClientModule,
  
  DashboardModule,
  MatStepperModule,
  AuthModule,
  NonFixedModule

  

  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

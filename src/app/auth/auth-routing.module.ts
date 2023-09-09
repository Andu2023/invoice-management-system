import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginSwiperComponent } from './component/login-swiper/login-swiper.component';

const routes: Routes = [
  { path: 'auth', component:AuthComponent,
  children:[
    {path: 'login', component:LoginPageComponent},
    {path: 'swiper', component:LoginSwiperComponent},
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

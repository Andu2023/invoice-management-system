import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginSwiperComponent } from './component/login-swiper/login-swiper.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: 'auth', component:AuthComponent,
  children:[
    {path: 'login', component:LoginPageComponent},
    {path: 'swiper', component:LoginSwiperComponent},
   
  ]
  },
  // { path: '**',  redirectTo: '/auth/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './common/home-page/home-page.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '',  redirectTo: '/auth/login', pathMatch: 'full'},
  {
    path:'home',
    component:HomePageComponent,canActivate:[AuthGuard]
  },
  // { path: '**',  redirectTo: '/auth/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

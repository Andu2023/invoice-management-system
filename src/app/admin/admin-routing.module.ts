import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserRegFormComponent } from './user-reg-form/user-reg-form.component';
import { EmployeRegFormComponent } from './employe-reg-form/employe-reg-form.component';
import { AdminCompontesComponent } from './admin-compontes/admin-compontes.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserListPageComponent } from './user-list-page/user-list-page.component';
import { EmployeListPageComponent } from './employe-list-page/employe-list-page.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: 'admin', component:AdminCompontesComponent,canActivate:[AuthGuard],
children:[
  {path: 'userReg', component:UserRegFormComponent,canActivate:[AuthGuard]},
  {path: 'userlist', component:UserListPageComponent,canActivate:[AuthGuard]},
  {path: 'employeReg', component:EmployeRegFormComponent,canActivate:[AuthGuard]},
  {path: 'employelist', component:EmployeListPageComponent,canActivate:[AuthGuard]},
  { path: '**',  redirectTo: 'userlist', pathMatch: 'full'}
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

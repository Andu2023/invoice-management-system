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
  { path: 'admin', component:AdminCompontesComponent,
children:[
  {path: 'userReg', component:UserRegFormComponent},
  {path: 'userlist', component:UserListPageComponent},
  {path: 'employeReg', component:EmployeRegFormComponent},
  {path: 'employelist', component:EmployeListPageComponent},
  { path: '**',  redirectTo: 'userlist', pathMatch: 'full'}
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

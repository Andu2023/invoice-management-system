import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserRegFormComponent } from './user-reg-form/user-reg-form.component';
import { EmployeRegFormComponent } from './employe-reg-form/employe-reg-form.component';
import { UserListPageComponent } from './user-list-page/user-list-page.component';
import { EmployeListPageComponent } from './employe-list-page/employe-list-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { MaterialModule } from '../Material/MaterialModule';
import { AdminCompontesComponent } from './admin-compontes/admin-compontes.component';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';



@NgModule({
  declarations: [
    AdminComponent,
    UserRegFormComponent,
    EmployeRegFormComponent,
    UserListPageComponent,
    EmployeListPageComponent,
    AdminHeaderComponent,
    AdminSidenavComponent,
    AdminMainComponent,
    AdminCompontesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule, 
    MaterialModule,
    HttpClientModule,
    NgToastModule,
  
  ]
})
export class AdminModule { }

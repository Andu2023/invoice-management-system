import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FixedRoutingModule } from './fixed-routing.module';
import { FixedComponent } from './fixed.component';
import { WithdroalFormComponent } from './components/withdroal-form/withdroal-form.component';
import { TransferFormComponent } from './components/transfer-form/transfer-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../Material/MaterialModule';
import { TransferPageComponent } from './components/transfer-page/transfer-page.component';

import { ImportFormsComponent } from './components/import-forms/import-forms.component';
import { ImportpagesComponent } from './components/importpages/importpages.component';
import { WithdroalForEmployeeComponent } from './components/withdroal-for-employee/withdroal-for-employee.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ForEmployeeComponent } from './components/for-employee/for-employee.component';
import { ForDepartmntComponent } from './components/for-departmnt/for-departmnt.component';
import { NgToastModule } from 'ng-angular-popup';

import { DashboardModule } from '../dashboard/dashboard.module';

import { AuthRoutingModule } from '../auth/auth-routing.module';
import { ReturnComponent } from './components/return/return.component';
import { CategoryComponent } from './components/category/category.component';





@NgModule({
  declarations: [
    FixedComponent,
    WithdroalFormComponent,

    TransferFormComponent,
    TransferPageComponent,
 
    ImportFormsComponent,
    ImportpagesComponent,
    WithdroalForEmployeeComponent,
    ForEmployeeComponent,
    ForDepartmntComponent,
    ReturnComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    FixedRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    MatStepperModule,
    MatInputModule ,
    MatButtonModule,
    NgToastModule,
  
    DashboardModule,
    AuthRoutingModule
  
   
  ]
})
export class FixedModule { }

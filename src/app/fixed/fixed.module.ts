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
import { ToastrModule } from 'ngx-toastr/public_api';



@NgModule({
  declarations: [
    FixedComponent,
    WithdroalFormComponent,

    TransferFormComponent,
    TransferPageComponent,
 
    ImportFormsComponent,
    ImportpagesComponent,
    WithdroalForEmployeeComponent
  ],
  imports: [
    CommonModule,
    FixedRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    MatStepperModule,
    MatInputModule ,
    MatButtonModule,
    ToastrModule
  ]
})
export class FixedModule { }

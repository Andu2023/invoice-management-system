import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixedComponent } from './fixed.component';
import { WithdroalFormComponent } from './components/withdroal-form/withdroal-form.component';
import { TransferPageComponent } from './components/transfer-page/transfer-page.component';

import { ImportpagesComponent } from './components/importpages/importpages.component';
import { ImportFormsComponent } from './components/import-forms/import-forms.component';
import { WithdroalForEmployeeComponent } from './components/withdroal-for-employee/withdroal-for-employee.component';
import { ForEmployeeComponent } from './components/for-employee/for-employee.component';


const routes: Routes = [
  {
    path: 'fixed', component:FixedComponent,
    children:[
      {path: 'import', component:ImportpagesComponent},
      {path: 'withdroal',component:WithdroalFormComponent }, 
      // {path: 'transfer', component:TransferFormComponent },
      {path: 'transferpage', component:TransferPageComponent },  
      {path: 'emp', component:WithdroalForEmployeeComponent }, 
      {path: 'foremp', component:ForEmployeeComponent }, 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixedRoutingModule { }

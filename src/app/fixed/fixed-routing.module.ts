import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixedComponent } from './fixed.component';
import { WithdroalFormComponent } from './components/withdroal-form/withdroal-form.component';
import { TransferPageComponent } from './components/transfer-page/transfer-page.component';

import { ImportpagesComponent } from './components/importpages/importpages.component';
import { ImportFormsComponent } from './components/import-forms/import-forms.component';
import { WithdroalForEmployeeComponent } from './components/withdroal-for-employee/withdroal-for-employee.component';
import { ForEmployeeComponent } from './components/for-employee/for-employee.component';
import { OrderComponent } from '../dashboard/components/order/order.component';
import { authGuardGuard } from '../shared/auth-guard.guard';
import { AddMaterialComponent } from './components/add-material/add-material.component';
import { StorePageComponent } from './components/store-page/store-page.component';
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes = [
  {
    path: 'fixed', component:FixedComponent,
    children:[
      {path: 'import', component:ImportpagesComponent},
      {path: 'withdroal',component:WithdroalFormComponent ,canActivate:[AuthGuard]}, 
      // {path: 'transfer', component:TransferFormComponent },
      {path: 'transferpage', component:TransferPageComponent,canActivate:[AuthGuard] },  
      {path: 'emp', component:WithdroalForEmployeeComponent ,canActivate:[AuthGuard]}, 
      {path: 'foremp', component:ForEmployeeComponent ,canActivate:[AuthGuard]}, 
      {path: 'order', component:OrderComponent,canActivate:[AuthGuard] }, 
      {path: 'addMaterial', component:StorePageComponent,canActivate:[AuthGuard] }, 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixedRoutingModule { }

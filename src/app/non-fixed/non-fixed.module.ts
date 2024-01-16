import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NonFixedRoutingModule } from './non-fixed-routing.module';
import { NonFixedComponent } from './non-fixed.component';
import { BuyComponent } from './buy/buy.component';
import { DistributeComponent } from './distribute/distribute.component';
import { ViewBuyItemComponent } from './view-buy-item/view-buy-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../Material/MaterialModule';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { NgToastModule } from 'ng-angular-popup';

import { DashboardModule } from '../dashboard/dashboard.module';

import { AuthRoutingModule } from '../auth/auth-routing.module';


@NgModule({
  declarations: [
    NonFixedComponent,
    BuyComponent,
    DistributeComponent,
    ViewBuyItemComponent
  ],
  imports: [
    CommonModule,
    NonFixedRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    MaterialModule,
    MatStepperModule,
    MatInputModule ,
    MatButtonModule,
    NgToastModule,
  
    DashboardModule,
    AuthRoutingModule
    
  
   
  
  
  ]
})
export class NonFixedModule { }

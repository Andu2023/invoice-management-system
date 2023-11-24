import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NonFixedRoutingModule } from './non-fixed-routing.module';
import { NonFixedComponent } from './non-fixed.component';
import { BuyComponent } from './buy/buy.component';
import { DistributeComponent } from './distribute/distribute.component';
import { ViewBuyItemComponent } from './view-buy-item/view-buy-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../Material/MaterialModule';


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
    
  
   
  
  
  ]
})
export class NonFixedModule { }

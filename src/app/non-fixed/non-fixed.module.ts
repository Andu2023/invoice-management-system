import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NonFixedRoutingModule } from './non-fixed-routing.module';
import { NonFixedComponent } from './non-fixed.component';


@NgModule({
  declarations: [
    NonFixedComponent
  ],
  imports: [
    CommonModule,
    NonFixedRoutingModule
  ]
})
export class NonFixedModule { }

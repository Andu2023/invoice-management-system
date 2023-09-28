import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardComponentsComponent } from './components/dashboard-components/dashboard-components.component';
import { SideNaveComponent } from './components/side-nave/side-nave.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { LastFewTransctionComponent } from './components/last-few-transction/last-few-transction.component';
import { StatusStoredMaterialComponent } from './components/status-stored-material/status-stored-material.component';
import { ViewMaterialByCatagoryComponent } from './components/view-material-by-catagory/view-material-by-catagory.component';
import { CommonDeviceComponent } from './components/common-device/common-device.component';
import { MaterialModule } from '../Material/MaterialModule';
import { ReturnedMaterialComponent } from './components/returned-material/returned-material.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { ViewAllMaterialComponent } from './components/view-all-material/view-all-material.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrderComponent } from './components/order/order.component';
import { NgToastModule } from 'ng-angular-popup';
import { ProductInEmployeeComponent } from './components/product-in-employee/product-in-employee.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardComponentsComponent,
    SideNaveComponent,
    HeaderComponent,
    MainComponent,
    LastFewTransctionComponent,
    StatusStoredMaterialComponent,
    ViewMaterialByCatagoryComponent,
    CommonDeviceComponent,
    ReturnedMaterialComponent,
    AllOrdersComponent,
    ViewAllMaterialComponent,
    OrderComponent,
    ProductInEmployeeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
   ReactiveFormsModule,
   NgToastModule,
    HttpClientModule
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MainComponent } from './components/main/main.component';
import { SideNaveComponent } from './components/side-nave/side-nave.component';
import { DashboardComponentsComponent } from './components/dashboard-components/dashboard-components.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { ViewAllMaterialComponent } from './components/view-all-material/view-all-material.component';
import { ViewMaterialByCatagoryComponent } from './components/view-material-by-catagory/view-material-by-catagory.component';
import { ProductInEmployeeComponent } from './components/product-in-employee/product-in-employee.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: 'dashboard',component: DashboardComponentsComponent,
children:[
  // {path: 'dashboardcomponts', component:DashboardComponentsComponent},
  {path: 'sideNav', component:SideNaveComponent},
  {path: 'all', component:AllOrdersComponent,canActivate:[AuthGuard]},
  {path: 'store', component:ViewAllMaterialComponent,canActivate:[AuthGuard]},
  {path: 'chart', component:MainComponent,canActivate:[AuthGuard]},
  {path: 'getwithdroal', component:ProductInEmployeeComponent,canActivate:[AuthGuard]},
  { path: '**',  redirectTo: 'store', pathMatch: 'full'}
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

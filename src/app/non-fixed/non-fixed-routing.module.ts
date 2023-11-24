import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonFixedComponent } from './non-fixed.component';
import { BuyComponent } from './buy/buy.component';

const routes: Routes = [
  {
    path: 'item', component:NonFixedComponent,
    children:[
      {path: 'buy', component:BuyComponent},
      
      // {path: 'transfer', component:TransferFormComponent },
       
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NonFixedRoutingModule { }

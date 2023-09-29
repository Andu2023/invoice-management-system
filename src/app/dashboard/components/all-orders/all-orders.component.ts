import { Component, OnInit } from '@angular/core';
import { Order } from '../../model/model';
import { ImportServiceService } from 'src/app/fixed/services/import-service.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent  implements OnInit {
  ordersToDisplay:any;
  
  displayColums:string[]=["የአመልካች ስም","የስራክፍል","የንብረቱ አይነት","ዝርዝር መረጃ"," የተላከበትቀን"];
  constructor(private service:ImportServiceService) { }
  ngOnInit(): void {
    this.getOrder();
  }
  getOrder() {
    this.service.Allorders().subscribe(res => {
      this.ordersToDisplay = res;
    });
  }
  EditProduct(code:any){
    // this.router.navigate(['product/edit/'+code])
  }

  
}

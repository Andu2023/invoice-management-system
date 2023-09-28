import { Component, OnInit } from '@angular/core';
import { ImportServiceService } from 'src/app/fixed/services/import-service.service';

@Component({
  selector: 'app-product-in-employee',
  templateUrl: './product-in-employee.component.html',
  styleUrls: ['./product-in-employee.component.css']
})
export class ProductInEmployeeComponent implements OnInit {
  ordersToDisplay:any;
  
  displayColums:string[]=["employeeName","employeeId","productName","productCode","quantity","withdroalrDate"];
  constructor(private service:ImportServiceService) { }
  ngOnInit(): void {
    this.getOrder();
  }
  getOrder() {
    this.service.getWithdroalProduct().subscribe(res => {
      this.ordersToDisplay = res;
    });
  }
  EditProduct(code:any){
    // this.router.navigate(['product/edit/'+code])
  }

  
}

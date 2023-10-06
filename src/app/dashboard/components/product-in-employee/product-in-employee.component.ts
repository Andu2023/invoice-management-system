import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ImportServiceService } from 'src/app/fixed/services/import-service.service';

@Component({
  selector: 'app-product-in-employee',
  templateUrl: './product-in-employee.component.html',
  styleUrls: ['./product-in-employee.component.css']
})
export class ProductInEmployeeComponent implements OnInit {
  ordersToDisplay:any;
  
  displayColums:string[]=["employeeName","employeeId","productName","quantity","withdroalrDate"];

  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private service:ImportServiceService) { }
  ngOnInit(): void {
    this.getOrder();
  }
  getOrder() {
    // this.service.getWithdroalProduct().subscribe(res => {
    //   this.ordersToDisplay = res;
    //   this.ordersToDisplay = new MatTableDataSource(this.ordersToDisplay);
    //   this.ordersToDisplay.paginator = this.paginatior;
    //   this.ordersToDisplay.sort = this.sort;
    // });
    this.service.getWithdroalProduct().subscribe(resp=>{
      this.ordersToDisplay=resp;
      this.ordersToDisplay = new MatTableDataSource(this.ordersToDisplay);
      this.ordersToDisplay.paginator = this.paginatior;
      this.sort = this.sort;
    })
  }
  EditProduct(code:any){
    // this.router.navigate(['product/edit/'+code])
  }

  
}

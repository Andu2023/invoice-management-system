import { Component, OnInit, ViewChild } from '@angular/core';
import { Order } from '../../model/model';
import { ImportServiceService } from 'src/app/fixed/services/import-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent  implements OnInit {
  ordersToDisplay:any;
  
  displayColums:string[]=["የአመልካች ስም","የስራክፍል","የንብረቱ አይነት","ዝርዝር መረጃ"," የተላከበትቀን"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private service:ImportServiceService) { }
  ngOnInit(): void {
    this.getOrder();
  }
  getOrder() {
    this.service.Allorders().subscribe(res => {
      this.ordersToDisplay = res;
      this.ordersToDisplay = new MatTableDataSource(this.ordersToDisplay);
      this.ordersToDisplay.paginator = this.paginatior;
      this.ordersToDisplay.sort = this.sort;
    });
  }
  EditProduct(code:any){
    // this.router.navigate(['product/edit/'+code])
  }

  
}

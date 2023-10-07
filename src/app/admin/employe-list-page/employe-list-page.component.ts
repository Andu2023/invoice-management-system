import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ImportServiceService } from 'src/app/fixed/services/import-service.service';

@Component({
  selector: 'app-employe-list-page',
  templateUrl: './employe-list-page.component.html',
  styleUrls: ['./employe-list-page.component.css']
})
export class EmployeListPageComponent implements OnInit {
 // UserData:any;
 ordersToDisplay:any;
  
  displayColums:string[]=["መታወቅያ.ቁ","ስም","የአባትስም","የአያትስም","ፆታ","የስራክፍል","ስልክ.ቁ","ማዕርግ"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
 
  constructor(private service:ImportServiceService) { 
  
  }
  ngOnInit(): void {
    this.emp();
  }
  emp(){
    // this.service.employee().subscribe(resp=>{
      this.service.employee().subscribe(resp=>{
        this.ordersToDisplay=resp;
        this.ordersToDisplay = new MatTableDataSource(this.ordersToDisplay);
        this.ordersToDisplay.paginator = this.paginatior;
        this.sort = this.sort;
      // this.UserData=resp;
      // this.UserData = new MatTableDataSource(this.UserData);
      // this.UserData.paginator = this.paginatior;
      // this.UserData.sort = this.sort;
    })
  }

EditProduct(code:any){
  // this.router.navigate(['product/edit/'+code])
}
productNumber(){
  
}
}

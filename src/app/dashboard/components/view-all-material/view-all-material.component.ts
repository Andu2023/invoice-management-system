import { Component, OnInit, ViewChild } from '@angular/core';
import { Book, CategoryBooks } from '../../model/model';
import { ImportServiceService } from 'src/app/fixed/services/import-service.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-all-material',
  templateUrl: './view-all-material.component.html',
  styleUrls: ['./view-all-material.component.css']
})
export class ViewAllMaterialComponent implements OnInit {
  productdata:any;
  // avaliablebooks:TblSalesProductInfo[]=[];
  // booksToDisplay:CatagoryBooks[]=[];
  displayColums:string[]=["የእቃው ስም","ሴሪያ.ቁ","ሞደል","ብዛት","የአንዱ ዋጋ","አጠቃላይ ዋጋ"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private service:ImportServiceService) { 
  
  }
  ngOnInit(): void {
    this.LoadProduct();
  }
  LoadProduct(){
    this.service.AllProducts().subscribe(resp=>{
      this.productdata=resp;
      this.productdata = new MatTableDataSource(this.productdata);
      this.productdata.paginator = this.paginatior;
      this.productdata.sort = this.sort;
    })
  }
  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.productdata.filter = value;
  }
EditProduct(code:any){
  // this.router.navigate(['product/edit/'+code])
}
productNumber(){
  
}
}
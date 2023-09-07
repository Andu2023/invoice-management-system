import { Component, OnInit } from '@angular/core';
import { Book, CategoryBooks } from '../../model/model';
import { ImportServiceService } from 'src/app/fixed/services/import-service.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-view-all-material',
  templateUrl: './view-all-material.component.html',
  styleUrls: ['./view-all-material.component.css']
})
export class ViewAllMaterialComponent implements OnInit {
  productdata:any;
  // avaliablebooks:TblSalesProductInfo[]=[];
  // booksToDisplay:CatagoryBooks[]=[];
  displayColums:string[]=["productName","productCode","productModel","qty","salesPrice","total"];
 
  constructor(private service:ImportServiceService) { 
  
  }
  ngOnInit(): void {
    this.LoadProduct();
  }
  LoadProduct(){
    this.service.AllProducts().subscribe(resp=>{
      this.productdata=resp;
    })
  }

EditProduct(code:any){
  // this.router.navigate(['product/edit/'+code])
}
productNumber(){
  
}
}
import { Component, OnInit } from '@angular/core';
import { Book, CategoryBooks } from '../../model/model';

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
 
  constructor() { 
  
  }
  ngOnInit(): void {
    this.LoadProduct();
  }
  LoadProduct(){
    // this.service.GetAllInvoicedetials().subscribe(resp=>{
    //   this.productdata=resp;
    // })
  }

EditProduct(code:any){
  // this.router.navigate(['product/edit/'+code])
}
productNumber(){
  
}
}
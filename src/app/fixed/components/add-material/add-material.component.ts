import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helper/validateForms';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.css']
})
export class AddMaterialComponent implements OnInit {
  
  pagetitle="ገቢ ቅፅ";
  Indetials !:FormArray<any>;
  invoiceproduct !: FormGroup<any>;
  mastercustomer: any;
  masterproduct: any;
constructor(private builder:FormBuilder,
 
  private router:Router,
 private toast:NgToastService,public dialogref:MatDialogRef<AddMaterialComponent>,
  ){}
ngOnInit(): void {
  this.GetCustomers();
    this.GetProducts();
    
    
 
    
}
Gebiform=this.builder.group({
  deliveryCampanyName:this.builder.control('',Validators.required),
  invoiceNo:this.builder.control ('', Validators.required),
  invoiceDate:this.builder.control('', Validators.required),
  total:this.builder.control({ value: 0, disabled: true }),
        customerName:this.builder.control('',Validators.required),
        customerId:this.builder.control('', Validators.required),
        deliveryAddress:this.builder.control('', Validators.required),
        deliverysName:this.builder.control('',Validators.required),
        deliveryId:this.builder.control('', Validators.required),
        detials:this.builder.array([])    
       
       
      
});
onclose(){
  this.dialogref.close(); 
}


onReset() {
  this.Gebiform.reset();
}

SaveInvoice() {
  
}

addnewproduct() {
  this.Indetials=this.Gebiform.get("detials") as FormArray;

  
    this.Indetials.push(this.Generaterow());
  } 

get Gebeproduct(){
  return this.Gebiform.get("detials") as FormArray;
}
Generaterow(){
  return this.builder.group({
    invoiceNo:this.builder.control(''),
    productName:this.builder.control(''),
    productCode:this.builder.control(''),
    productModel:this.builder.control(''),
    qty:this.builder.control(1),
    salesPrice:this.builder.control(0),
    total:this.builder.control({ value: 0, disabled: true })

  });
}

GetCustomers() {
  // this.service.GetCustomer().subscribe(res => {
  //   this.mastercustomer = res;
  // })
}
GetProducts() {
//   this.service.GetProduct().subscribe(res => {
//     this.masterproduct = res;
   
//   })
// 
}
productchange(index: any){
  this.Indetials = this.Gebiform.get("detials") as FormArray;
  this.invoiceproduct = this.Indetials.at(index) as FormGroup;
  
  
  this.Itemcalculation(index);  
}
Itemcalculation(index: any) {
  this.Indetials = this.Gebiform.get("detials") as FormArray;
  this.invoiceproduct = this.Indetials.at(index) as FormGroup;
  let  Quantity = this.invoiceproduct.get("qty")?.value;
  let Price = this.invoiceproduct.get("salesPrice")?.value;
  let  total =  Quantity * Price;
  this.invoiceproduct.get("total")?.setValue( total);

  this.summarycalculation();
}
summarycalculation() {
  let array = this.Gebiform.getRawValue().detials;
  let sumtotal = 0
  array.forEach((x: any) => {
    sumtotal = sumtotal + x.total;
  });

  // tax calculation
 // let sumtax = (7 / 100) * sumtotal;
  //let nettotal = sumtotal + sumtax;

  this.Gebiform.get("total")?.setValue(sumtotal);
 // this.Gebiform.get("tax")?.setValue(sumtax);
  //this.Gebiform.get("netTotal")?.setValue(nettotal);
}
Removeproduct(index: any){
  if(confirm('Do you want to remove?')){
    this.Gebeproduct.removeAt(index);
    this.summarycalculation();

  }
}

print(){
  window.print();
}
}

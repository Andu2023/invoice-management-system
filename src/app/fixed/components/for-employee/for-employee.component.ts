import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ImportServiceService } from '../../services/import-service.service';

@Component({
  selector: 'app-for-employee',
  templateUrl: './for-employee.component.html',
  styleUrls: ['./for-employee.component.css']
})
export class ForEmployeeComponent implements OnInit {
  saveresp: any;
  ngOnInit(): void {}
  constructor(public dialogref:MatDialogRef<ForEmployeeComponent>,
  private router:Router,private builder:FormBuilder, private service:ImportServiceService,private toast:NgToastService){}
  withdroalform=this.builder.group({
    productCode:this.builder.control('',Validators.required),
    quantity:this.builder.control ('', Validators.required),
    employeeId:this.builder.control('', Validators.required),
    invoiceDate:this.builder.control('', Validators.required),
    
  });
  onclose(){
    this.dialogref.close(); 
  }
  SaveInvoice(){
  //   if(this.withdroalform.valid){
  //     console.log(this.withdroalform.value)
  //     let signUpObj = {
  //      ...this.withdroalform.value,
  //      role:'',
  //      token:''
  //    }
  //     this.service.Return(signUpObj).subscribe({
  //      next:(res => {
       
  //         this.toast.success({detail:"Message", summary:"Register SuccessFully !!",duration:2000})
         
  // //      }),
  // //     })
  
  // // }   
  // // }}
  // console.log(this.withdroalform.value) 
  //   this.service.withdroalProduct(this.withdroalform.getRawValue()).subscribe(res => {
  //     alert("created succesfully");
  //     let result: any;
  //     result = res;
  //     if (result.result == 'Product quantity decreased.') {
  //       alert("created succesfully");
  //     this.toast.success({detail:"success message", summary:"Stored SuccessFully !",duration:2000})
  //     }
  //     else{
       
  //       this.toast.error({detail:"Eror message", summary:"invalid form please try agin",duration:3000})
  //     }
  //   }); 
  if (this.withdroalform.valid) {
    // console.log(this.employeeform.value);

    this.service.forEmployee(this.withdroalform.value).subscribe(result => {
      this.toast.success({detail:"Message", summary:"Order has been sent!!",duration:3000})
      this.withdroalform.reset();
    //   this.saveresp = result;
    //   if (this.saveresp.result == 'Product quantity decreased.') {
    //     this.toast.success({detail:"success message", summary:"Stored SuccessFully !",duration:2000})

    //   } else {
    //     this.toast.error({detail:"Eror message", summary:"invalid form please try agin",duration:3000})
    //   }

    });
   }// else {
  //   this.message = "Please enter valid data"
  //   this.messageclass = 'error'
  // }
    }
  }
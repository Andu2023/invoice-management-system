import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ImportServiceService } from 'src/app/fixed/services/import-service.service';
import ValidateForm from 'src/app/helper/validateForms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
  
orderForm!: FormGroup;
constructor(private formBuilder: FormBuilder, private router:Router,private service:ImportServiceService,private tost:NgToastService ) {}
ngOnInit(): void {   
  this.orderForm =this.formBuilder.group({
    employeeName:['',Validators.required],  
    employeeDepartmnt:['',Validators.required], 
    productDescription:['',Validators.required],
    productName:['',Validators.required],
 
      });
    }
  
    onSubmit(){
      if(this.orderForm.valid){
        console.log(this.orderForm.value)
        let order = {
         ...this.orderForm.value,
         role:'',
         token:''
       }
        this.service.addOrder(order).subscribe({
         next:(res => {
           //alert(res.message);
           this.tost.success({detail:"Message", summary:"Order has been sent!!",duration:3000})
           this.orderForm.reset();
           // this.router.navigate(['user'])
         }),
         error:(err=>{
          
           this.tost.error({detail:"Error", summary:"Invalid form please try agin",duration:3000}) })
       })
     }
     else{
       ValidateForm.validateAllFormFields(this.orderForm); 
       this.tost.error({detail:"Eror message", summary:"invalid form please try agin",duration:3000})
     }
    }
}


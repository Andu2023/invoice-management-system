import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ImportServiceService } from 'src/app/fixed/services/import-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
  
orderForm!: FormGroup;
constructor(private formBuilder: FormBuilder, private router:Router,private toast:NgToastService,private service:ImportServiceService ) {}
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
               let orderdata = {
                ...this.orderForm.value,
                role:'',
                token:''
              }
               this.service.addOrder(orderdata).subscribe({
                next:(res => {
                  this.toast.success({detail:"Eror message", summary:"invalid form please try agin",duration:3000})
                  this.orderForm.reset();
                }),
                error:(err=>{
                 
                  this.toast.error({detail:"Eror message", summary:"invalid form please try agin",duration:3000}) })
              })
            }
           
        }
}


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
  ngOnInit(): void {}
  constructor(public dialogref:MatDialogRef<ForEmployeeComponent>,
  private router:Router,private builder:FormBuilder, private service:ImportServiceService,private toast:NgToastService){}
  withdroalform=this.builder.group({
    productCode:this.builder.control('',Validators.required),
    quantity:this.builder.control ('', Validators.required),
    fId:this.builder.control('', Validators.required),
    
  });
  onclose(){
    this.dialogref.close(); 
  }
  SaveInvoice(){
    console.log(this.withdroalform.value) 
    this.service.withdroal(this.withdroalform.getRawValue()).subscribe(res => {
      let result: any;
      result = res;
      // if (result.result == 'Product quantity decreased.') {
      
      // this.toast.success({detail:"success message", summary:"Stored SuccessFully !",duration:2000})
      // }
        
      });  
  
  }
}

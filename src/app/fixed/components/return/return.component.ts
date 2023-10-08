import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ImportServiceService } from '../../services/import-service.service';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {
  ngOnInit(): void {}
  constructor(public dialogref:MatDialogRef<ReturnComponent>,
  private router:Router,private builder:FormBuilder, private service:ImportServiceService,private toast:NgToastService){}
  returnform=this.builder.group({
    productCode:this.builder.control('',Validators.required),
    quantity:this.builder.control ('', Validators.required),
    employeeId:this.builder.control('', Validators.required),
    
  });
  onclose(){
    this.dialogref.close(); 
  }
  SaveInvoice() {
    console.log(this.returnform.value) 
    this.service.Return(this.returnform.getRawValue()).subscribe(res => {
      
      let result: any;
      result = res;
      alert()
    }); 
    }
}

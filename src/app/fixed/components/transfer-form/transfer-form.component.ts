import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/Material/MaterialModule';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.css']
})
export class TransferFormComponent 
implements OnInit  {
  pagetitle="ቋሚ ንብረቶች የማስተላለፊያ ቅጽ";
  Indetials!:FormArray<any>;
  constructor( private builder:FormBuilder,public dialogref:MatDialogRef<TransferFormComponent>){}
  ngOnInit(): void {}
  Transformform=this.builder.group({
    AssesterName:this.builder.control('',Validators.required),
    Assesterid:this.builder.control ('', Validators.required),
    Assesterdepartmnt:this.builder.control('', Validators.required),
    ReciverName:this.builder.control(''),
    Reciverid:this.builder.control(''),
    ReciverDepartmnt:this.builder.control('',Validators.required),
          DateofTransfer:this.builder.control('', Validators.required),
          ReaonofTransfer:this.builder.control('', Validators.required),
          Detailes:this.builder.array([])        
        
  });
  addnewproduct(){
    this.Indetials=this.Transformform.get("Detailes") as FormArray;
    this.Indetials.push(this.Generaterow());
  }
  get Gebeproduct(){
    return this.Transformform.get("Detailes") as FormArray;
  }
  
  Generaterow(){
    return this.builder.group({
      No:this.builder.control(''),
       Description:this.builder.control('',Validators.required),
      PIN:this.builder.control(''),
      Serial:this.builder.control(''),
      Quantity:this.builder.control(1),
      Price:this.builder.control(0),
      Remark:this.builder.control(0),
      
  
    });
  }
  onclose(){
    this.dialogref.close();
  }
  onReset() {
    this.Transformform.reset();
  }
  SaveItem(){
    console.log(this.Transformform.value);
  }

}
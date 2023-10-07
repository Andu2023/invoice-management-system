import { Component, OnInit } from '@angular/core';
import { TransferFormComponent } from '../transfer-form/transfer-form.component';
import { MatDialog } from '@angular/material/dialog';
import { ReturnComponent } from '../return/return.component';

@Component({
  selector: 'app-transfer-page',
  templateUrl: './transfer-page.component.html',
  styleUrls: ['./transfer-page.component.css']
})
export class TransferPageComponent implements OnInit{
  ngOnInit(): void {}
constructor(private dialog:MatDialog){}

  // addproduct(){
  //   this.dialog.open(AddnewmaterialComponent,{
  //     height:'90%',
  //     width:'95%',
      

  //   });
    
  // }
  Transferproduct(){
    this.dialog.open(TransferFormComponent,{
      height:'95%',
      width:'95%',
    });

  }
  return(){
    this.dialog.open(ReturnComponent,{
      height:'55%',
      width:'55%',
    });

  }

}

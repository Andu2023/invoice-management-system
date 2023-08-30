import { Component, OnInit } from '@angular/core';
import { ImportFormsComponent } from '../import-forms/import-forms.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-importpages',
  templateUrl: './importpages.component.html',
  styleUrls: ['./importpages.component.css']
})
export class ImportpagesComponent implements OnInit{
  ngOnInit(): void {}
constructor(private dialog:MatDialog){}

  // addproduct(){
  //   this.dialog.open(AddnewmaterialComponent,{
  //     height:'90%',
  //     width:'95%',
      

  //   });
    
  // }
  Transferproduct(){
    this.dialog.open(ImportFormsComponent,{
      height:'95%',
      width:'95%',
    });

  }

}

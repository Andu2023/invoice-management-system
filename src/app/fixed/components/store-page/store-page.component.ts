import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddMaterialComponent } from '../add-material/add-material.component';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent implements OnInit{
  ngOnInit(): void {}
constructor(private dialog:MatDialog){}
  Transferproduct(){
    this.dialog.open(AddMaterialComponent,{
      height:'95%',
      width:'100%',
    });

  }


}

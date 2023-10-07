import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ForEmployeeComponent } from '../for-employee/for-employee.component';

@Component({
  selector: 'app-withdroal-form',
  templateUrl: './withdroal-form.component.html',
  styleUrls: ['./withdroal-form.component.css']
})
export class WithdroalFormComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private dialog:MatDialog){}
foremp(){
  this.dialog.open(ForEmployeeComponent,{
    height:'65%',
    width:'55%',
  });
}
}

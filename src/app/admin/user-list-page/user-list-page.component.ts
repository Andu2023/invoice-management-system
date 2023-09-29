import { Component, OnInit, ViewChild } from '@angular/core';
import { AdimnServiceService } from '../adimn-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { User } from 'src/app/dashboard/model/model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit{

  
  UserData:any;
  dataSource:any;
  displayColums:string[]=["firstName","lastName","userName","email","role","action"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private service:AdimnServiceService) { }
  ngOnInit(): void {
    this.AddUser();
  }
  AddUser() {
    this.service.getAllUser().subscribe(res => {
      this.UserData = res;
      this.UserData = new MatTableDataSource(this.UserData);
      this.UserData.paginator = this.paginatior;
      this.UserData.sort = this.sort;
    });
  }
  EditProduct(code:any){
    // this.router.navigate(['product/edit/'+code])
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit{
  
  UserData:any;
  
  displayColums:string[]=["firstName","lastName","userName","email","role","action"];
  constructor() { }
  ngOnInit(): void {
    this.AddUser();
  }
  AddUser() {
    // this.service.getAllUser().subscribe(res => {
    //   this.UserData = res;
    // });
  }
  EditProduct(code:any){
    // this.router.navigate(['product/edit/'+code])
  }
}

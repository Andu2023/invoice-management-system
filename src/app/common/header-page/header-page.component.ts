import { Component, DoCheck, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserStoreService } from 'src/app/Services/user-store.service';
import { AuthServiceService } from 'src/app/auth/Services/auth-service.service';
import { UserStoreServiceService } from 'src/app/auth/Services/user-store-service.service';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent  implements OnInit{
  @Output() menuClicked=new EventEmitter<boolean>();
  displaymenu=false;
  public role!:string;

  public fullName : string = "";
  constructor(private route:Router,private auth:AuthServiceService,private userStore: UserStoreServiceService){

  }
  ngOnInit() {
    this.userStore.getFullNameFromStore()
    .subscribe(val=>{
      const fullNameFromToken = this.auth.getfullNameFromToken();
      this.fullName = val || fullNameFromToken
    });

    this.userStore.getRoleFromStore()
    .subscribe(val=>{
      const roleFromToken = this.auth.getRoleFromToken();
      this.role = val || roleFromToken;
    })
  }
  logout(){
    this.auth.signOut();
  }
  ngDoCheck(): void {
    if (this.route.url == '/auth/login') {
      this.displaymenu = false
    }
    else if (this.route.url == '/dashboard') {
      this.displaymenu = false
    } 
    else if (this.route.url == '/dashboard/chart') {
      this.displaymenu = false
    } 
    else if (this.route.url == '/dashboard/all') {
      this.displaymenu = false
    } 
    else if (this.route.url == '/dashboard/store') {
      this.displaymenu = false
    } 
    else if (this.route.url == '/admin') {
      this.displaymenu = false
    }
    else if (this.route.url == '/admin/userReg') {
      this.displaymenu = false
    } 
    else if (this.route.url == '/admin/userlist') {
      this.displaymenu = false
    } 
    else if (this.route.url == '/admin/employeReg') {
      this.displaymenu = false
    } 
    else if (this.route.url == '/dashboard/getwithdroal') {
      this.displaymenu = false
    } 
    else if (this.route.url == '/admin/employelist') {
      this.displaymenu = false
    } 
    else {
      this.displaymenu = true
    }
  }
}
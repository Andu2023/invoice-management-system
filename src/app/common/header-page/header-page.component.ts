import { Component, DoCheck, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/Services/auth-service.service';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent  implements DoCheck{
  @Output() menuClicked=new EventEmitter<boolean>();
  displaymenu=false;
  constructor(private route:Router,private auth:AuthServiceService){

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
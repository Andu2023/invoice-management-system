import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/Services/auth-service.service';
import { UserStoreServiceService } from 'src/app/auth/Services/user-store-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output ()menuClicked=new EventEmitter<boolean>();
  constructor(private route:Router,private auth:AuthServiceService,private userStore: UserStoreServiceService){

  }
  logout(){
    this.auth.signOut();
  }
}

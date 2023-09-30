import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
//import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../auth/Services/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { NgToastService } from 'ng-angular-popup';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private auth : AuthServiceService,  private toast: NgToastService,  private router: Router){}
canActivate():boolean{
  if(this.auth.isLoggedIn()){
    return true
  }else{
    this.toast.error({detail:"ERROR", summary:"Please Login First!"});
    this.router.navigate(['auth/login'])
    return false;
  }
}
}

import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../auth/Services/auth-service.service';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

constructor(private auth : AuthServiceService, private toast: ToastrService,  private router: Router){}
//canActivate(){
  // if(){
  //   return true
  // }else{
  //   this.toast.error({detail:"ERROR", summary:"Please Login First!"});
  //   this.router.navigate(['/login'])
  //   return false;
  // }
//}
}

import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toast:ToastrService) { }
  showsucsess(title:any,message:any){
    this.toast.success(message,title);
  }
}

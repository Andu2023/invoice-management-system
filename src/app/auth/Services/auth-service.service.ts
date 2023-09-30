import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/dashboard/model/model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  
  private baseUrl:string = "http://localhost:5252/api/User/";

  constructor(private http:HttpClient,private router:Router) { }
 signUp(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}register`,userObj);
  }
  login(loginObj: any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj);
  }
  getAllUser():Observable<User[]>{ 
    return this.http.get<User[]>('http://localhost:5252/api/User/getAllUser');
}
storeToken(tokenValue: string){
  localStorage.setItem('token', tokenValue)
}
signOut(){
  localStorage.clear();
  this.router.navigate(['auth/login'])
}
getToken(){
  return localStorage.getItem('token')
}
isLoggedIn(): boolean{
  return !!localStorage.getItem('token')
}


}

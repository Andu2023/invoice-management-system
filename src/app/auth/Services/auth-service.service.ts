import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/dashboard/model/model';
import{ JwtHelperService} from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  
  private baseUrl:string = "http://localhost:5252/api/User/";
  private userPayload:any;
  constructor(private http:HttpClient,private router:Router) {
    this.userPayload = this.decodedToken();
   }
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
decodedToken(){
  const jwtHelper = new JwtHelperService();
  const token = this.getToken()!;
  console.log(jwtHelper.decodeToken(token))
  return jwtHelper.decodeToken(token)
}

getfullNameFromToken(){
  if(this.userPayload)
  return this.userPayload.name;
}

getRoleFromToken(){
  if(this.userPayload)
  return this.userPayload.role;
}

}

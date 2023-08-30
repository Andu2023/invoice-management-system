import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/dashboard/model/model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  
  private baseUrl:string = "http://localhost:5252/api/User/";

  constructor(private http:HttpClient) { }
 signUp(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}register`,userObj);
  }
  login(loginObj: any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj);
  }
  getAllUser():Observable<User[]>{ 
    return this.http.get<User[]>('http://localhost:5252/api/User/getAllUser');
}

}

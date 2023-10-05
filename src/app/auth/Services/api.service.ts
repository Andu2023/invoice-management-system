import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/dashboard/model/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient,private router:Router) {}
  getAllUser():Observable<User[]>{ 
    return this.http.get<User[]>('http://localhost:5252/api/User/getAllUser');
}
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImportServiceService {
  // private baseUrl:string = "http://localhost:5252/api/Product/";

  constructor(private http:HttpClient) { }

AllProducts(){ return this.http.get('http://localhost:5252/api/Import/GetAllProducts');}
GetAllImportHeaders(){ return this.http.get('http://localhost:5252/api/Import/GetAllImportHeader');}
 SaveProducts(invoicedata:any){ return this.http.post('http://localhost:5252/api/Import/Save',invoicedata );
}
addEmployee(invoicedata:any){ return this.http.post('http://localhost:5252/api/Employee/AddEmployee',invoicedata );
}
employee(){ return this.http.get('http://localhost:5252/api/Employee/GetAll');}
return(invoicedata:any){ return this.http.post('http://localhost:5252/api/Product/return',invoicedata );
}
addOrder(order:any){ return this.http.post('http://localhost:5252/api/Order/Order',order );
}
Allorders(){ return this.http.get('http://localhost:5252/api/Order/getAllOrder');}

getWithdroalProduct(){ return this.http.get('http://localhost:5252/api/catagory/userAndProduct');}

GetEmployeebyId(fId:any) {
  return this.http.get('http://localhost:5252/api/Employee/GetAllEmploteeByCode=?'+fId);
}
Return(invoicedata:any){ return this.http.post('http://localhost:5252/api/Product/return',invoicedata );}
withdroalProduct(invoicedata:any){ return this.http.post('http://localhost:5252/api/catagory/decrease-quantity',invoicedata );}
}

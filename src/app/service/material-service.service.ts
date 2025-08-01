import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaterialServiceService  {

  constructor(private http:HttpClient) { }
  GetCustomer(){
    return this.http.get('https://localhost:7068/api/Customer/GetAll');
  }
  GetCustomerbycode(code:any){ return this.http.get('https://localhost:7068/api/Customer/GetByCode?Code='+code);
}
  GetProduct(){ return this.http.get('https://localhost:7068/api/Product/GetAll');
}
  GetCProductbycode(code:any){ return this.http.get('https://localhost:7068/api/Product/GetByCode='+code);
}
GetAllInvoice(){ return this.http.get('https://localhost:7068/Invoice/GetAllHeader');}
GetAllInvoicedetials(){ return this.http.get('https://localhost:7068/Invoice/GetAllInvoiceDetail');}
GetAllInHeaderByCode(invoiceno:any){return this.http.get('https://localhost:7068/Invoice/GetAllHeaderbyCode?invoiceno='+invoiceno);}
GetInDetialByCode(invoiceno:any){ return this.http.get('https://localhost:7068/Invoice/GetAllDetailbyCode?invoiceno='+invoiceno);}
RemoveInvoice(invoiceno:any){ return this.http.delete('https://localhost:7068/Invoice/Remove?InvoiceNo='+invoiceno);}
SaveInvoice(invoicedata:any){ return this.http.post('https://localhost:7068/Invoice/Save',invoicedata );
}

  }

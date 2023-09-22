import { Component, OnInit } from '@angular/core';
import { ImportServiceService } from 'src/app/fixed/services/import-service.service';

@Component({
  selector: 'app-employe-list-page',
  templateUrl: './employe-list-page.component.html',
  styleUrls: ['./employe-list-page.component.css']
})
export class EmployeListPageComponent implements OnInit {
  UserData:any;
  
  displayColums:string[]=["fId","name","midleName","lastName","gender","departmnt","phoneno","level"];
 
  constructor(private service:ImportServiceService) { 
  
  }
  ngOnInit(): void {
    this.emp();
  }
  emp(){
    this.service.employee().subscribe(resp=>{
      this.UserData=resp;
    })
  }

EditProduct(code:any){
  // this.router.navigate(['product/edit/'+code])
}
productNumber(){
  
}
}

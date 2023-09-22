import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImportServiceService } from 'src/app/fixed/services/import-service.service';

@Component({
  selector: 'app-employe-reg-form',
  templateUrl: './employe-reg-form.component.html',
  styleUrls: ['./employe-reg-form.component.css']
})
export class EmployeRegFormComponent  implements OnInit {
  pagetitle="የሰራተኛ መረጃ መመዝገቢያ ቅጽ";
  constructor(private builder: FormBuilder, private router:Router,private service:ImportServiceService){}
ngOnInit(): void {
 
}
    Empform=this.builder.group({
  name:this.builder.control('',Validators.required),  
  midleName:this.builder.control('',Validators.required), 
  lastName:this.builder.control('',Validators.required),
  fId:this.builder.control('',Validators.required),
  gender:this.builder.control('',Validators.required),
  phoneno:this.builder.control('',Validators.required),
  level:this.builder.control('',Validators.required),
  departmnt:this.builder.control('',Validators.required),
      });
SaveEmployee(){
  console.log(this.Empform.value) 
  this.service.addEmployee(this.Empform.getRawValue()).subscribe(res => {
    let result: any;
    result = res;
   
      
    });  

}
}
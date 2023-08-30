import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-withdroal-for-employee',
  templateUrl: './withdroal-for-employee.component.html',
  styleUrls: ['./withdroal-for-employee.component.css']
})
export class WithdroalForEmployeeComponent implements OnInit {
  constructor(private fb:FormBuilder){}
  isLinear=false;
ngOnInit(): void {
  
}
Empregister=this.fb.group({
basic:this.fb.group({
fname:this.fb.control('',Validators.required),
lname:this.fb.control('',Validators.required)

}),
contact:this.fb.group({
  email:this.fb.control('',Validators.required),
  phone:this.fb.control('',Validators.required),
  fax:this.fb.control('',Validators.required)
}),
address:this.fb.group({
  streat:this.fb.control('',Validators.required),
  city:this.fb.control('',Validators.required),
  pin:this.fb.control('',Validators.required),
})
});
}

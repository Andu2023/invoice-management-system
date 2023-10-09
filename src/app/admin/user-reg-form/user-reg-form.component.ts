import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/Services/auth-service.service';
import ValidateForm from 'src/app/helper/validateForms';
import { AdimnServiceService } from '../adimn-service.service';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-user-reg-form',
  templateUrl: './user-reg-form.component.html',
  styleUrls: ['./user-reg-form.component.css']
})
export class UserRegFormComponent implements OnInit{
  type:string="password";
  isText:boolean=false;
  eyeIcon:string="fa-eye-slash";
  showPassword: boolean = false;
signupForm!: FormGroup;
constructor(private formBuilder: FormBuilder, private router:Router,
 private service:AdimnServiceService,private toast:NgToastService ) {}
ngOnInit(): void {   
  this.signupForm =this.formBuilder.group({
  firstName:['',Validators.required],  
  lastName:['',Validators.required], 
  userName:['',Validators.required],
  email:['',Validators.required],
  // role:['',Validators.required],
 password:['', Validators.required ]
      });
    }
  
//   onReset() {
//     this.submitted = false;
//     this.registerForm.reset();
// }
  
  
  hideShowPassword(){
    this.isText=!this.isText;
    this.isText?this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
    this.isText?this.type="text":this.type="password";
           }
          
      
          onSubmit(){
             if(this.signupForm.valid){
               console.log(this.signupForm.value)
               let signUpObj = {
                ...this.signupForm.value,
                role:'',
                token:''
              }
               this.service.signUp(signUpObj).subscribe({
                next:(res => {
                  //alert(res.message);
                  this.toast.success({detail:"Success message", summary:res.message,duration:3000})
                  this.signupForm.reset();
                  // this.router.navigate(['user'])
                }),
                error:(err=>{
                 
                  this.toast.error({detail:"Eror message", summary:"invalid form please try agin",duration:3000}) })
              })
            }
            else{
              ValidateForm.validateAllFormFields(this.signupForm); 
              this.toast.error({detail:"Eror message", summary:"invalid form please try agin",duration:3000})
            }
        }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helper/validateForms';
import { AuthServiceService } from '../../Services/auth-service.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent  implements OnInit{
  type:string="password";
  isText:boolean=false;
  eyeIcon:string="fa-eye-slash";
  showPassword: boolean = false;
 loginForm!: FormGroup;
   constructor(private formBuilder: FormBuilder,private router:Router,
    private service:AuthServiceService) {  }
  ngOnInit(): void {
     this.loginForm =this.formBuilder.group({
      userName:['',Validators.required],
       password:['', Validators.required ]
      });
    }

   
       hideShowPassword(){
this.isText=!this.isText;
this.isText?this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
this.isText?this.type="text":this.type="password";
       }
      // service
       onSubmit(){
      if(this.loginForm.valid){
       console.log(this.loginForm.value) 
       this.service.login(this.loginForm.value)
       .subscribe({
        next: (res) => {
          //alert(res.message);
          this.loginForm.reset();
          this.router.navigate(['home'])
        },
        error:(err)=>{
          alert(err?.error.message)
         }
      })
      }
        
    // else{
     
    //   ValidateForm.validateAllFormFields(this.loginForm);
    //    alert("invalid form");
    // }   
    }
  }

import { AuthenticationService } from './../../core/services/authentication.service';
import { Component, inject } from '@angular/core';
import { AbstractControl, EmailValidator, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  // constructor(private authentication:AuthenticationService){}
  // isLoading:boolean=false;
  authentication=inject(AuthenticationService);
  router=inject(Router);
  errorMessage:string=''
  registerDone:string=''

  registerForm:FormGroup= new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl(null, [Validators.required, Validators.pattern(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    rePassword: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    phoneNumber: new FormControl(null, [Validators.required, Validators.pattern(/^01[0-2,5]{1}[0-9]{8}/)]),
  }, this.confirmPassword)

  submit():void{
    // this.isLoading=true;
    if (this.registerForm.valid) {
      this.authentication.register(this.registerForm.value).subscribe({
        next:(res)=>{
          console.log(res.message);
          this.registerDone=res.message;
          setInterval(()=>{this.router.navigate(['/login'])},3000)
        },error:(error)=>{
          console.log(error.error.message);
          this.errorMessage=error.error.message;
        }
      })
    }else{
      this.registerForm.markAllAsTouched()
    }
  }

  confirmPassword(form:AbstractControl){
    let password= form.get('password')?.value;
    let rePassword= form.get('rePassword')?.value;
    if(password === rePassword){
      return null
    }else{
      return {misMatch:true}
    }
  }
}

import { AuthenticationService } from './../../core/services/authentication.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  imports: [ReactiveFormsModule, ],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss'
})
export class ForgetpasswordComponent {

  authentication=inject(AuthenticationService);
  router=inject(Router);
  email:string=''
  step:number=1;

  emailConfirmationForm:FormGroup= new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.pattern(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)]),
  })
  
  resetCodeForm:FormGroup= new FormGroup({
    resetCode: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{6}$/)]),
  })

  resetPasswordForm:FormGroup= new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.pattern(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)]),
    newPassword: new FormControl(null, [Validators.required, Validators.minLength(12)]),
  })

  emailConfirmed(){
    this.email=this.emailConfirmationForm.controls['email'].value;
    this.resetPasswordForm.controls['email'].patchValue(this.email);
    this.authentication.forgetPassword(this.emailConfirmationForm.value).subscribe({
      next:(res)=>{
        console.log(res)
        if (res.message) {
          this.step=2;
        }
      },error:(err)=>{
        console.log(err)
      }
    })
  }

  

  codeConfirmed(){
    this.authentication.confirmCode(this.resetCodeForm.value).subscribe({
      next:(res)=>{
        console.log(res)
        this.step=3;
      },error:(err)=>{
        console.log(err)
      }
    })
  }

  newPassword(){
    this.authentication.resetPassword(this.resetPasswordForm.value).subscribe({
      next:(res)=>{
        console.log(res)
        localStorage.setItem('userToken',res.token)
        this.router.navigate(['/home'])
      },error:(err)=>{
        console.log(err)
      }
    })
  }
}

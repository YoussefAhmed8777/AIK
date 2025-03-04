import { AuthenticationService } from './../../core/services/authentication.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  authentication=inject(AuthenticationService);
  router=inject(Router);
  errorMessage:string=''
  loginDone:string=''

  loginForm:FormGroup= new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.pattern(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
  })

  submit():void{
    // this.isLoading=true;
    if (this.loginForm.valid) {
      this.authentication.login(this.loginForm.value).subscribe({
        next:(res)=>{
          this.loginDone=res.message;
          localStorage.setItem('userToken',res.token);
          this.authentication.decodeToken();
          console.log(this.authentication.userData);
          setInterval(()=>{this.router.navigate(['/home'])},3000);
        },error:(error)=>{
          this.errorMessage=error.error.message;
        }
      })
    }else{
      this.loginForm.markAllAsTouched()
    }
  }
}

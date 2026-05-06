import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm:FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  })
  //using Router to go to Dashboard
  constructor(private authService:AuthService, private router:Router){}
  login(){
    console.log(this.loginForm)
    this.authService.login(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("login success");
        //go to dashboard
        this.router.navigateByUrl("/dashboard");
        //to store token for browser authentication
        localStorage.setItem("token",data.access_token);

      },(err:any)=>{
        alert("invalid credentials");
      }
    )
  }
}

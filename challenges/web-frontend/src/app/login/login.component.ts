import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { ApiServiceService } from '../api-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  hide = true;
  loginErrorMessage = ''
  username = ''
  password = ''
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private router: Router, private ApiServiceService: ApiServiceService) { 
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }
  onLogin(){
    this.ApiServiceService.verifyCredentials(this.username, this.password).subscribe((data:any) => {
      if(data.authenticated){
        console.log(data.token)
        localStorage.setItem('authToken', data.token)
        localStorage.setItem('username', this.username)
        this.router.navigate(['/dashboard'])
      }
    }, (error:any) => {
      localStorage.clear()
      this.loginErrorMessage = "Username or Password is Incorrect!"
    })
  }
}

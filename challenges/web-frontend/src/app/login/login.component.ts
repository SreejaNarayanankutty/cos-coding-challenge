import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router} from '@angular/router';


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
  constructor(private router: Router) { 
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }
  onLogin(){
    if(this.username==='salesman@random.com' && this.password ==='123test'){
      this.router.navigate(['/dashboard'])
    }else{
      this.loginErrorMessage = "Username or Password is Incorrect!"
    }
  }

}

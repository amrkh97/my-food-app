import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm', { static: false }) loginForm: NgForm;
  constructor(private router:Router, private userS:UserService) { }

  ngOnInit(): void {
  }
  isBlank(str: string) {

    return (!str || /^\s*$/.test(str));
  }

  onSubmit(){
    if(this.validateUser()){
      this.userS.setLogInStatus(true);
      this.router.navigate(['../foodlist'])
    }else{
      alert('Invalid User Name Or password mismatch');
      this.loginForm.form.reset();
    }
  }

  validateUser(){
    let userName = this.loginForm.form.value.userName;
    let pass = this.loginForm.form.value.password;
    let repass = this.loginForm.form.value.re_password;
    if(userName && pass === repass && pass.length >= 8){
      return true;
    }else{
      return false;
    }
  }

}

import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  @ViewChild('loginForm', { static: false }) loginForm: NgForm;
  constructor(private router:Router,
     private userS:UserService,
     private http: HttpClient) { }

  ngOnInit(): void {
  }
  isBlank(str: string) {

    return (!str || /^\s*$/.test(str));
  }

  onSubmit(){
    let userName = this.loginForm.form.value.name;
    let pass = this.loginForm.form.value.password;
    let repass = this.loginForm.form.value.re_password;

    if(this.userS.validateUser(userName, pass, repass)){

      this.getToken(userName, pass);

    }else{
      alert('Invalid User Name Or password mismatch');
      this.loginForm.form.reset();
    }
  }

  getToken(user_name: String, pass: String){
    const data = {
      userName: user_name,
      password: pass
    };

    this.http
    .post('http://localhost:8080/users/add', data)
    .subscribe((serverResponse: any) => {
      console.log(serverResponse);
      this.userS.setLogInStatus(true);

      localStorage.setItem('token', serverResponse.jwt);
      localStorage.setItem('userInfo', serverResponse.userModel);
      console.log("Token was generated!");

      if (localStorage.getItem('token') === null) {
        console.log("Entered Here!");
        this.userS.setLogInStatus(false);
        alert('Invalid username/password! Or User doesn\'t exist');
        this.loginForm.form.reset();
      }else{
      this.userS.setLogInStatus(true);
      alert("Welcome "+ user_name + "!");
      this.router.navigate(['../foodlist'])
      }
      
    }, (error: { json: () => void; }) => {
      console.log(error);
      this.loginForm.form.reset();
      alert(error['error']['ReturnMsg']);
    });

    //END OF TOKEN SAVING
  }

}
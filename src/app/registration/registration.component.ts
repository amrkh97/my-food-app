import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @ViewChild('loginForm', { static: false }) loginForm: NgForm;

  constructor(private userS:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let userName = this.loginForm.form.value.name;
    let pass = this.loginForm.form.value.password;
    
    this.userS.validateUser(userName, pass);
    this.userS.setLogInStatus(true);
    
    alert("Welcome "+ userName + "!");
    
    this.router.navigate(['../foodlist']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router:Router, private userS:UserService) { }

  ngOnInit(): void {
  }

  navigateToFoodList(){
    this.userS.setLogInStatus(true);
    this.router.navigate(['../foodlist'])
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FoodService } from './services/food.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-food-app';
  constructor(private userService: UserService,
    private foodService:FoodService,
    private http:HttpClient){}

  getLogInStatus(){
    return this.userService.getLogInStatus();
  }

  ngOnInit() {
    if (localStorage.getItem('token') === null) {
      this.userService.setLogInStatus(false);
    }
  }

}

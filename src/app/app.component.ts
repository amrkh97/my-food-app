import { Component } from '@angular/core';
import { FoodService } from './services/food.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-food-app';
  constructor(private userService: UserService,
    private foodService:FoodService){}

  getLogInStatus(){
    return this.userService.getLogInStatus();
  }
}

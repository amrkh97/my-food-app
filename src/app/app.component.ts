import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-food-app';
  constructor(private userService: UserService){}

  getLogInStatus(){
    return this.userService.getLogInStatus();
  }
}

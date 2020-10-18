import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { UserService } from '../services/user.service';
import {foodObject} from './food-item/food-item.model'
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  listOfFood:foodObject[];
  constructor(private userS:UserService,
     private foodS: FoodService) { }

  ngOnInit(): void {
    console.log(this.userS.getLogInStatus())
    this.listOfFood = this.foodS.getListOfFood();
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import {foodObject} from '../../models/food-item.model'

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
  @Input() foodItem: foodObject;
  constructor(private foodS:FoodService) { }

  ngOnInit(): void {
  }
  
  addToCart(foodItem: foodObject){
    this.foodS.addToCart(foodItem);
    console.log(foodItem.name + " was added to the cart!");
  }

}

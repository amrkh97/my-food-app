import { Component, OnInit } from '@angular/core';
import { foodObject } from '../models/food-item.model';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-food-cart',
  templateUrl: './food-cart.component.html',
  styleUrls: ['./food-cart.component.css']
})
export class FoodCartComponent implements OnInit {
  orderedFood: foodObject[];
  foodTotal: number;
  constructor(private foodS: FoodService) { }

  ngOnInit(): void {
    this.orderedFood = this.foodS.getOrderedFood();
    this.foodTotal = this.foodS.getFoodTotal();
  }

}

import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-food-cart',
  templateUrl: './food-cart.component.html',
  styleUrls: ['./food-cart.component.css']
})
export class FoodCartComponent implements OnInit {

  constructor(private foodS: FoodService) { }

  ngOnInit(): void {
    alert(this.foodS.getFoodTotal())
  }

}

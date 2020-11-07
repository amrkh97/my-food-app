import { HttpClient } from '@angular/common/http';
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
  data: any;
  constructor(private foodS: FoodService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.orderedFood = this.foodS.getOrderedFood();
    this.data = {
      userId: {"id": Number(localStorage.getItem('userId'))},
      foodOrder: this.orderedFood 
    };
    this.foodTotal = this.foodS.getFoodTotal();
  }

  sendFoodOrder(){


    console.log(this.data);

    this.http
    .post('http://localhost:8080/foodOrders/add', this.data)
    .subscribe((serverResponse: any) => {
      console.log(serverResponse);
    }, (error: { json: () => void; }) => {
      console.log(error);
      alert("Error in adding food order!");
    });
  }

}

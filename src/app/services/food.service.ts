import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { foodObject } from '../models/food-item.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  listOfFood: foodObject[] = [
    new foodObject(0,'Messy Burger',85,'Just pure chaos in a sandwich.' ,'../../assets/burger_sandwich.png'),
    new foodObject(0,'Fried Chicken',110,'It is finger lickin\' good!','../../assets/fried_chicken.jpg'),
    new foodObject(0,'Grilled Chicken',120,'Charcoaled to perfection ','../../assets/grilled_chicken.jpg'),
    new foodObject(0,'Pizza',80,'Need we say more?','../../assets/pizza.jpg'),
    new foodObject(0,'Pasta Alfredo',85,'Creaminess you can\'t resist.','../../assets/pasta.jpg')
  ]

  orderedFood: foodObject[] = [];
  constructor(private http: HttpClient) { 
  }

  getListOfFood(){
    
    return this.listOfFood;
  }

  getFoodFromService(){
    return this.http.get<foodObject[]>('http://localhost:8080/foodItems');
  }


  setListOfFood(foodList: foodObject[]){
    this.listOfFood = foodList;
  }

  getFoodTotal(){
    let sum: number = this.orderedFood.map(a => a.price).reduce(function(a, b)
    {
      return a + b;
    });
    return sum;
  }

  addToCart(foodItem:foodObject){
    this.orderedFood.push(foodItem);
  }

  getOrderedFood(){
    return this.orderedFood;
  }
}

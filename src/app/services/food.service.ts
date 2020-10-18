import { Injectable } from '@angular/core';
import { foodObject } from '../food-list/food-item/food-item.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  listOfFood: foodObject[] = [
    new foodObject('Messy Burger',85,'Just pure chaos in a sandwich.' ,'https://www.thebuffaloburger.com/images/m_burger.png'),
    new foodObject('Fried Chicken',110,'It is finger lickin\' good!','https://c.ndtvimg.com/2019-05/usn4dnv_fried-chicken_625x300_24_May_19.jpg')
  ]

  orderedFood: foodObject[] = [];
  constructor() { }

  getListOfFood(){
    return this.listOfFood;
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

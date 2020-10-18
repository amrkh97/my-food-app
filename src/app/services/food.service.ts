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
  constructor() { }

  getListOfFood(){
    return this.listOfFood;
  }
}

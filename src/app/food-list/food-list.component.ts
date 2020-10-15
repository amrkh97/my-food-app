import { Component, OnInit } from '@angular/core';
import {foodObject} from './food-item/food-item.model'
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  listOfFood: foodObject[] = [
    new foodObject('Messy Burger','85','Just pure chaos in a sandwich.' ,'https://www.thebuffaloburger.com/images/m_burger.png'),
    new foodObject('Fried Chicken','110','It is finger lickin\' good!','https://c.ndtvimg.com/2019-05/usn4dnv_fried-chicken_625x300_24_May_19.jpg')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

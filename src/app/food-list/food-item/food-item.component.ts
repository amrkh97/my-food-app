import { Component, Input, OnInit } from '@angular/core';
import {foodObject} from './food-item.model'

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
  @Input() foodItem: foodObject;
  constructor() { }

  ngOnInit(): void {
  }

}

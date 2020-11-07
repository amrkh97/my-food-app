import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FoodService } from '../services/food.service';
import { UserService } from '../services/user.service';
import {foodObject} from '../models/food-item.model'
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  listOfFood:foodObject[];

  constructor(private userS:UserService,
     private foodS: FoodService, private router: Router) { }

  ngOnInit(): void {
    this.foodS.getFoodFromService().subscribe((serverResponse: any) => {
      
      this.listOfFood = serverResponse;

    }, (error: { json: () => void; }) => {
      console.log(error);
      
      alert("Error in getting food list!");
    });
  }

  checkOrder(){
    let lenFood = this.foodS.getOrderedFood().length;
    return lenFood===0 ? true: false;
  }

  openAlert() {
    alert("Please add food to the cart before proceeding!")
  }

  proceedToCheckOut(){
    if (!this.checkOrder())
      this.router.navigate(["../cart"]);
    else
      this.openAlert();
  }
}

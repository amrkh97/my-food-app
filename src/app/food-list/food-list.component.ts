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
  //@ViewChild('myModal') myModal;

  constructor(private userS:UserService,
     private foodS: FoodService, private router: Router) { }

  ngOnInit(): void {
    this.listOfFood = this.foodS.getListOfFood();
  }

  checkOrder(){
    let lenFood = this.foodS.getOrderedFood().length;
    return lenFood===0 ? true: false;
  }

  openAlert() {
    //this.myModal.nativeElement.className = 'show';
    alert("Please add food to the cart before proceeding!")
  }

  proceedToCheckOut(){
    if (!this.checkOrder())
      this.router.navigate(["../cart"]);
    else
      this.openAlert();
  }
}

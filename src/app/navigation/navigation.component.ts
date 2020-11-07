import { Component, NgModule, OnInit } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  collapsed = true;
  constructor() { }
  ngOnInit(): void {

  }

  onCollapseInvert(){
    this.collapsed = !this.collapsed;
  }

  logOut(){
    //localStorage.removeItem('token');
    localStorage.clear();
  }
}

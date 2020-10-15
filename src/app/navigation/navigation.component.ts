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
    console.log("Old Value:")
    console.log(this.collapsed);
    this.collapsed = !this.collapsed;
    
    console.log("New Value:")
    console.log(this.collapsed);
  }

}

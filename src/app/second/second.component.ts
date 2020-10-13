import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  disableVar: boolean = false;
  showText:boolean = false;
  
  constructor() {
    setTimeout(() => {
      this.disableVar = true;
    },2000);
   }

  ngOnInit(): void {
  }

  makeLabelAppear(event: Event){
    this.showText = true;
    console.log(event);
  }

}

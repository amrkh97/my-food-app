import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  disableVar: boolean = false;
  constructor() {
    setTimeout(() => {
      this.disableVar = true;
    },2000);
   }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';
import { PriceLadder } from './models/price-ladder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skeleton-app';

  ladders :PriceLadder[] = [];

  addLadder() {
    console.log("Add ladder");
    this.ladders = [
      { caption: "asd"},
      { caption: "qwe"},
    ]

  }
}

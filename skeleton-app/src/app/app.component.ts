import { Component } from '@angular/core';
import { PriceLadder } from './models/price-ladder';
import { PriceService } from 'src/app/services/price.service';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skeleton-app';

  ladders :PriceLadder[] = [];

  constructor(private priceService: PriceService) { }

  addLadder() {
    console.log("Add ladder");
    this.ladders = [
      { caption: "asd"},
      { caption: "qwe"},
    ]
  }

  testApi() {
    console.log("Call API");
    let r = this.priceService.getPrices();
  }
}

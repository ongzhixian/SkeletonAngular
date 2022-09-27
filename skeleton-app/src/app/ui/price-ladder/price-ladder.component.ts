import { Component, OnInit } from '@angular/core';
import { PriceService } from 'src/app/services/price.service';

@Component({
  selector: 'app-price-ladder',
  templateUrl: './price-ladder.component.html',
  styleUrls: ['./price-ladder.component.css']
})
export class PriceLadderComponent implements OnInit {

  constructor(private priceService: PriceService) { }

  caption: string = "";

  ngOnInit(): void {
    var px = this.priceService.getPrices();
    console.log(px);
  }

}

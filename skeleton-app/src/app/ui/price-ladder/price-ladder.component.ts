import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-ladder',
  templateUrl: './price-ladder.component.html',
  styleUrls: ['./price-ladder.component.css']
})
export class PriceLadderComponent implements OnInit {

  constructor() { }

  caption: string = "";

  ngOnInit(): void {
  }

}

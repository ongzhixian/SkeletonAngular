import { Injectable } from '@angular/core';
import { Portfolio } from '../models/portfolio';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  getPortfolioList() : Portfolio[] {
    return [
      {id : "pf1", name : "pf1 name", description : "desc1"},
      {id : "pf2", name : "pf2 name", description : "desc2"},
      {id : "pf3", name : "pf3 name", description : "desc3"},
    ];
  }
}

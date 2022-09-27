import { Injectable } from '@angular/core';
import { Portfolio } from '../models/portfolio';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {

    constructor() { }

    private selectedPortfolio = new Subject<Portfolio>();

    portfolioSelected$ = this.selectedPortfolio.asObservable();

    getPortfolioList(): Portfolio[] {
        return [
            { id: "pf1", name: "pf1 name", description: "desc1" },
            { id: "pf2", name: "pf2 name", description: "desc2" },
            { id: "pf3", name: "pf3 name", description: "desc3" },
        ];
    }

    selectPortfolio(portfolio: Portfolio) {
        this.selectedPortfolio.next(portfolio);
    }
}

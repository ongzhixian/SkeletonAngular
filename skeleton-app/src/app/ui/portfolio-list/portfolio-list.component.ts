import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Portfolio } from 'src/app/models/portfolio';
import { PortfolioService } from 'src/app/services/portfolio.service';
@Component({
    selector: 'app-portfolio-list',
    templateUrl: './portfolio-list.component.html',
    styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {

    constructor(private portfolioService: PortfolioService) { }

    portfolioList?: Portfolio[];
    selectedPortfolio?: Portfolio;
    @Output() portfolioSelectedEvent:EventEmitter<any> = new EventEmitter();


    ngOnInit(): void {
        this.portfolioList = this.portfolioService.getPortfolioList();
    }

    onSelect(portfolio: Portfolio): void {
        this.selectedPortfolio = portfolio;
        this.portfolioSelectedEvent.emit(portfolio);
        console.log(portfolio);
    }
}

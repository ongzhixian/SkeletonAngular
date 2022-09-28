import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/models/portfolio';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
    selector: 'app-portfolio-detail',
    templateUrl: './portfolio-detail.component.html',
    styleUrls: ['./portfolio-detail.component.css']
})
export class PortfolioDetailComponent implements OnInit {

    constructor(private portfolioService: PortfolioService) { }

    selectedPortfolio?: Portfolio;

    ngOnInit(): void {
        this.portfolioService.getData().subscribe(result => {
            console.log("Portfolio detail", result);
            this.selectedPortfolio = result;
        }, error => {
            console.warn('failed to get data', error);
        });
    }
}

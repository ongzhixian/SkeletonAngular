import { Component, OnInit } from '@angular/core';
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
    modalStyle?: string;

    ngOnInit(): void {
        this.portfolioList = this.portfolioService.getPortfolioList();
    }

    onSelect(portfolio: Portfolio): void {
        this.selectedPortfolio = portfolio;
        this.portfolioService.setData(this.selectedPortfolio);
        console.log(portfolio);
    }

    displayModal(): void {
        this.modalStyle = "display:block";
    }

    closeModal(): void {
        this.modalStyle = "display:none";
    }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PriceLadderComponent } from './ui/price-ladder/price-ladder.component';
import { StoreModule } from '@ngrx/store';
import { PortfolioListComponent } from './ui/portfolio-list/portfolio-list.component';
import { PortfolioDetailComponent } from './ui/portfolio-detail/portfolio-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { OrderEntryComponent } from './ui/order-entry/order-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    PriceLadderComponent,
    PortfolioListComponent,
    PortfolioDetailComponent,
    DashboardComponent,
    OrderEntryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

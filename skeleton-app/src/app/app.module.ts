import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PriceLadderComponent } from './ui/price-ladder/price-ladder.component';
import { StoreModule } from '@ngrx/store';
import { PortfolioListComponent } from './ui/portfolio-list/portfolio-list.component';
import { PortfolioDetailComponent } from './ui/portfolio-detail/portfolio-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PriceLadderComponent,
    PortfolioListComponent,
    PortfolioDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}, {})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

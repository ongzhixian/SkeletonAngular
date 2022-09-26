import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PriceLadderComponent } from './ui/price-ladder/price-ladder.component';

@NgModule({
  declarations: [
    AppComponent,
    PriceLadderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { PriceCalculatorComponent } from './price-calculator/price-calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    PriceCalculatorComponent,
    // Other components, directives, or pipes go here
  ],
  imports: [
    BrowserModule,
    // Other modules go here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


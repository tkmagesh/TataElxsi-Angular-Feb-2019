import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { SalaryCalculatorComponent } from './salaryCalculator/salaryCalculator.component';
import { SalaryCalculatorResultComponent } from './salaryCalculator/salaryCalculatorResult.component';

import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    AppComponent
    , GreeterComponent
    , SalaryCalculatorComponent
    , SalaryCalculatorResultComponent
    , ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
  	/*AppComponent
  	, GreeterComponent
    SalaryCalculatorComponent
    */
    ProductsComponent
  ]
})
export class AppModule { }

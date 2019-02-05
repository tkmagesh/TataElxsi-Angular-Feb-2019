import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { SalaryCalculatorComponent } from './salaryCalculator/salaryCalculator.component';

@NgModule({
  declarations: [
    AppComponent
    , GreeterComponent
    , SalaryCalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
  	/*AppComponent
  	, GreeterComponent*/
    SalaryCalculatorComponent
  ]
})
export class AppModule { }

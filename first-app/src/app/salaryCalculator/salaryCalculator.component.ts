import { Component , ViewEncapsulation} from '@angular/core';
import { SalaryCalculatorModel } from './salaryCalculatorModel';

@Component({
	selector : 'app-salary-calculator',
	templateUrl : 'salaryCalculator.component.html',
	styleUrls : ['salaryCalculator.component.css'],
	encapsulation : ViewEncapsulation.None
})
export class SalaryCalculatorComponent{

	model : SalaryCalculatorModel = new SalaryCalculatorModel();

}
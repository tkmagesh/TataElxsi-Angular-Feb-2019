import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
	selector : 'app-salary-result',
	template : `
		<div class="field">
			<table>
				<tbody>
					<tr>
						<td id="tdBasic">{{model.basic}}</td>
						<td id="tdHra">{{model.hra}}</td>
						<td id="tdDa">{{model.da}}</td>
						<td id="tdTax">{{model.tax}}</td>
						<td id="tdSalary" [ngClass]="{poorSalary : model.salary < 10000, goodSalary : model.salary >= 10000 }">
							{{model.salary | currency:'INR'}}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	`,
	styleUrls : ['salaryCalculatorResult.component.css'],
	

})
export class SalaryCalculatorResultComponent{

	@Input('data')
	model = null;

}
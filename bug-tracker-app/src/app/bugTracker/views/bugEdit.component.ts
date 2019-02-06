import { Component, EventEmitter, Output } from '@angular/core';
import { BugOperationsService } from '../services/bugOperations.service'
import { Bug } from '../models/Bug';

@Component({
	selector : 'app-bug-edit',
	template : `
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" (keyup)="newBugName = $event.target.value">
			<span> [ {{newBugName.length }} ] </span>
			<input type="button" value="Add New" (click)="onAddNewClick()">
		</section>
	`
})
export class BugEditComponent{
	newBugName : string = '';

	@Output()
	created : EventEmitter<Bug> = new EventEmitter<Bug>();

	constructor(private bugOperationsService : BugOperationsService){

	}

	onAddNewClick(){
		let newBug : Bug = this.bugOperationsService.createNew(this.newBugName);
		this.created.emit(newBug);
		
	}

}
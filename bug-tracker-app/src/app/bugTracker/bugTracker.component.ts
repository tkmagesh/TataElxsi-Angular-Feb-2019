import { Component } from '@angular/core';

import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	
	bugs : Bug[] = [];

	/*
	bugOperationsService : BugOperationsService = null;

	constructor(_bugOperationsService : BugOperationsService){
		this.bugOperationsService = _bugOperationsService;
	}
	*/

	constructor(private bugOperationsService : BugOperationsService){

	}

	onAddNewClick(newBugName : string){
		let newBug : Bug = this.bugOperationsService.createNew(newBugName);
		this.bugs.push(newBug);
	}

	onBugNameClick(bug : Bug){
		this.bugOperationsService.toggle(bug);
	}

	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	getClosedCount() : number {
		return this.bugs.reduce((result,bug) => bug.isClosed ? ++result : result, 0);
	}
}
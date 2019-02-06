import { Component } from '@angular/core';

import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	
	bugs : Bug[] = [];

	newBugName : string = '';

	/*
	bugOperationsService : BugOperationsService = null;

	constructor(_bugOperationsService : BugOperationsService){
		this.bugOperationsService = _bugOperationsService;
	}
	*/

	public sortBugAttr : string = '';
	public sortBugDesc : boolean = false;
	
	constructor(private bugOperationsService : BugOperationsService){
		this.bugs.push(this.bugOperationsService.createNew('Server communication failure'));
		this.bugs.push(this.bugOperationsService.createNew('Application not responding'));
		this.bugs.push(this.bugOperationsService.createNew('User access denied'));
		this.bugs.push(this.bugOperationsService.createNew('Data integrity checks failed'));
	}

	onAddNewClick(){
		let newBug : Bug = this.bugOperationsService.createNew(this.newBugName);
		//this.bugs.push(newBug);
		this.bugs = [...this.bugs, newBug];
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
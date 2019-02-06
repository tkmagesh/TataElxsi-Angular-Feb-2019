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

	public sortBugAttr : string = '';
	public sortBugDesc : boolean = false;
	
	constructor(private bugOperationsService : BugOperationsService){
		
	}

	onBugCreated(newBug : Bug){
		this.bugs = [...this.bugs, newBug];
	}
	
	onBugNameClick(bugToToggle : Bug){
		let toggledBug = this.bugOperationsService.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
	}

	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	getClosedCount() : number {
		console.log('getClosedCount triggered');
		return this.bugs.reduce((result,bug) => bug.isClosed ? ++result : result, 0);
	}
}
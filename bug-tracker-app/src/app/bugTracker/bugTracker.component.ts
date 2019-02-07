import { Component, OnInit } from '@angular/core';

import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';


@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
	
	bugs : Bug[] = [];

	public sortBugAttr : string = '';
	public sortBugDesc : boolean = false;

	public message : string = '';
	
	constructor( private bugOperationsService : BugOperationsService){
		
	}

	ngOnInit(){
		//this.bugs = this.bugOperationsService.getAll();
		this.bugOperationsService
			.getAll()
			.subscribe(bugs => {
				this.bugs = bugs;
				this.message = "The bugs are loaded";
			});

	}
	
	onBugCreated(newBug : Bug){
		this.bugs = [...this.bugs, newBug];
	}
	
	onBugNameClick(bugToToggle : Bug){
		this.bugOperationsService
			.toggle(bugToToggle)
			.subscribe(toggledBug => this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug));
	}

	onRemoveClosedClick(){
		this
			.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => {
				this.bugOperationsService
					.remove(closedBug)
					.subscribe(() => this.bugs = this.bugs.filter(bug => bug.id !== closedBug.id));				
			});
	}

}
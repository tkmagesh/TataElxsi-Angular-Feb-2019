import { Component, OnInit } from '@angular/core';

import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';
import { HttpClient } from '@angular/common/http';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
	
	bugs : Bug[] = [];

	public sortBugAttr : string = '';
	public sortBugDesc : boolean = false;
	
	constructor(private httpClient : HttpClient, private bugOperationsService : BugOperationsService){
		
	}

	ngOnInit(){
		//this.bugs = this.bugOperationsService.getAll();
		this.httpClient
			.get<Bug[]>('http://localhost:3000/bugs')
			.subscribe(bugs => this.bugs = bugs);
	}

	onAddNewBugClick(){
		let dummyBugData = {
			id : 0,
			name : 'A dummy bug',
			isClosed : false,
			createdAt : new Date(),
			desc : 'asdflkj ladsfjld aslfjad;l jfl;dajslf;kad'
		};
		this.httpClient
			.post<Bug>('http://localhost:3000/bugs', dummyBugData)
			.subscribe(newBug => this.bugs = [...this.bugs, newBug]);
	}
	
	onBugCreated(newBug : Bug){
		this.bugs = [...this.bugs, newBug];
	}
	
	onBugNameClick(bugToToggle : Bug){
		let toggledBug = this.bugOperationsService.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
	}

	onRemoveClosedClick(){
		this
			.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => {
				this.bugOperationsService.remove(closedBug);
				this.bugs = this.bugs.filter(bug => bug.id !== closedBug.id)
			});
	}

}
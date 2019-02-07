import { Injectable } from '@angular/core'
import { Bug } from '../models/Bug';
import { BugApiService } from './bugApi.service';
import { Observable } from 'rxjs';

@Injectable()
export class BugOperationsService{

	constructor(private bugApi : BugApiService){

	}
	createNew(newBugName : string) : Observable<Bug> {
		let newBugData : Bug = {
			id : 0,
			name : newBugName,
			isClosed : false,
			createdAt : new Date()
		};
		return this.bugApi.save(newBugData);
	}

	getAll() : Observable<Bug[]>{
		return this.bugApi.getAll();
	}

	toggle(bugToToggle : Bug) : Observable<Bug> {
		let toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
		return this.bugApi.save(toggledBug);
	}
	remove(bug) : Observable<any>{
		return this.bugApi.remove(bug);
	}
}



/*import { Injectable } from '@angular/core'
import { Bug } from '../models/Bug';
import { BugStorageService } from './bugStorage.service';

@Injectable()
export class BugOperationsService{

	constructor(private bugStorageService : BugStorageService){

	}
	createNew(newBugName : string) : Bug {
		let newBugData : Bug = {
			id : 0,
			name : newBugName,
			isClosed : false,
			createdAt : new Date()
		};
		let newBug = this.bugStorageService.save(newBugData);
		return newBug;
	}

	getAll(){
		return this.bugStorageService.getAll();
	}

	toggle(bugToToggle : Bug) : Bug {
		let toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
		return this.bugStorageService.save(toggledBug);
	}
	remove(bug){
		this.bugStorageService.remove(bug);
	}
}*/
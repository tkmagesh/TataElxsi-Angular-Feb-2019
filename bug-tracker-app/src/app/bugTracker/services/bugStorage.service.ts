import { Bug } from '../models/Bug';

export class BugStorageService{
	private storage  = window.localStorage;
	private currentBugId = 0;

	getAll() : Bug[]{
		let bugs = [];
		for(let index = 0, count = this.storage.length; index < count; index++){
			let key = this.storage.key(index),
				rawData = this.storage.getItem(key),
				bug = JSON.parse(rawData);
			this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;
			bugs.push(bug);
		}
		return bugs;
	}
	save(bug : Bug) : Bug {
		if (bug.id === 0)
			bug.id = ++this.currentBugId;
		this.storage.setItem(bug.id.toString(), JSON.stringify(bug));
		return bug;
	}
	remove(bug : Bug){
		this.storage.removeItem(bug.id.toString());
	}
}
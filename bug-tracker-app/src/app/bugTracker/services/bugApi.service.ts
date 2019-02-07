import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
import { Observable } from 'rxjs';

@Injectable()
export class BugApiService{
	
	private serviceEndPoint = 'http://localhost:3000/bugs';

	constructor(private httpClient : HttpClient){

	}

	getAll() : Observable<Bug[]>{
		return this
			.httpClient
			.get<Bug[]>(this.serviceEndPoint)

	}
	save(bugData : Bug) : Observable<Bug> {
		if (bugData.id === 0){
			return this
				.httpClient
				.post<Bug>(this.serviceEndPoint, bugData);
		} else {
			return this
				.httpClient
				.put<Bug>(`${this.serviceEndPoint}/${bugData.id}`, bugData);
		}
	}

	remove(bugData : Bug) : Observable<any>{
		return this
			.httpClient
			.delete<any>(`${this.serviceEndPoint}/${bugData.id}`)
	}
}
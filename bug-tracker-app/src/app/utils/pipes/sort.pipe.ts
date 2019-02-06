import { Pipe, PipeTransform } from '@angular/core';

interface Comparer{
	(p1 : any, p2 : any) : number
}

@Pipe({
	name: 'sort',
	pure : true
})
export class SortPipe implements PipeTransform {

	private getDescendingComparerFor(comparer : Comparer) : Comparer{
		return function(p1 : any, p2 : any) : number {
			return comparer(p1, p2) * -1;
	    }
	}
	private getComparerFor(attrName : string) : Comparer {
		return function(p1 : any, p2 : any) : number {
			if (p1[attrName] < p2[attrName]) return -1;
			if (p1[attrName] > p2[attrName]) return 1;
			return 0;
	    }
	}
	transform(data: any[], attrName : string, isDescending : boolean = false): any[] {
		//console.log('sort.transform invoked');
		if (!data || !data.length || !attrName) return data;
		let comparer = this.getComparerFor(attrName);
		if (isDescending)
			comparer = this.getDescendingComparerFor(comparer);
		return data.sort(comparer);
	}
}
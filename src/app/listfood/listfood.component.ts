import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../food';

@Component({
	selector: 'app-listfood',
	templateUrl: './listfood.component.html',
	styleUrls: ['./listfood.component.css']
})
export class ListfoodComponent {
	selectedFood = null;
	@Input() food: Food = null; /* food is of type Food */
	@Input() foodID: number = null;
	@Output() foodSelect = new EventEmitter<any>();

	constructor() {}

	/* method to truncate text for description */
	textTruncate(str: string, length: number, ending: string) {
		// if (length == null) {
		// 	length = 100;
		// }
		// if (ending == null) {
		// 	ending = '...';
		// }
		if (str.length > length) {
			return str.substring(0, length - ending.length) + ending;
		} else {
			return str;

		}
	}

}

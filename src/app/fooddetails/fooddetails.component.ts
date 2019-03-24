import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../food';

@Component({
	selector: 'app-fooddetails',
	templateUrl: './fooddetails.component.html',
	styleUrls: ['./fooddetails.component.css']
})
export class FooddetailsComponent {

	@Input() foodId: number = null;
	@Input() foodDetails: Food = null; /* Food Details is of type Food */
	@Output() closePanel = new EventEmitter<boolean>();

	constructor() { }

	closeDetails() {
		this.closePanel.emit(true);
	}

}

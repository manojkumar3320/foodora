import { Component, ViewChild, ElementRef, HostListener, OnInit } from '@angular/core';

import { Food } from './food';
import { FoodService  } from './food.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})



export class AppComponent implements OnInit {
	title = 'Foodora'; /* Title of site */
	selectedFoodId = null; /* selectedFoodId is an variable used to assign the passed foodid*/
	foodDetails: Food =  null; /* Food is an interface where all the types are declared */
	foodslist: Food[] = null; /* foodslist is a type of interface Food which refer to object of an array */
	stickyFoodDetails = null; /* used for the reference to add class sticky details in app.component.html */
	@ViewChild('mainFoodListing') foodListingElement: ElementRef; /* MainFoodListing is the Element refernce used in app.component.html   */
	constructor(private addFetchFood: FoodService) {} /* Foodservice is a service which is stored in addFetchFood */

	ngOnInit() {
		this.fetchFood();
	}

	async fetchFood() {
		try {
			this.foodslist = await this.addFetchFood.getItem('Foodora');
			this.updateFoodList();
		} catch (error) {
			console.log(error);
		}
	}

	updateFoodList() {

		/* subscribe method is used to recognize and update when the new foods are added */
		this.addFetchFood.foodAdded.subscribe((result: Food[]) => {
			this.foodslist = result;
		});

	}

	showDetails(foodID: number) {
		this.selectedFoodId = foodID;
		/* foodDetails here will have the foodslist with the passes foodId */
		this.foodDetails = this.foodslist[foodID];
	}

	closeDetails() {
		this.selectedFoodId = null; /* Make the SelectedFoodId to null */
		this.foodDetails =  null; /* Remove the content in the foodDetails */
	}

	@HostListener('window:scroll', []) /* HostListener is used for binding with CSS events */
	onWindowScroll() { /* Its an event called when the window is scrolled */
		const element = this.foodListingElement.nativeElement; /* el here refers to the mainFoodListing */
		if (this.foodListingElement.nativeElement !== undefined) {
			const viewportOffset = element.getBoundingClientRect(); /* viewportOffset will have all the four corner values */
			const top = viewportOffset.top; /* get the top value */
			if (top < 0) {
				this.stickyFoodDetails = true;
			} else {
				this.stickyFoodDetails = false;
			}
		}
	}
}


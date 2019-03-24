import { Component, ViewChild } from '@angular/core';
import { FoodService } from '../food.service';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-addfood',
	templateUrl: './addfood.component.html',
	styleUrls: ['./addfood.component.css'],
})

export class AddfoodComponent {

	categoriesList = [
		{name: 'Indian'},
		{name: 'Chinese'},
		{name: 'Italian'},
		{name: 'Spanish'}
	];  /* Array of caterogieslist with key value pair */
	
	@ViewChild ('addForm') addProductForm: NgForm;

	constructor(private addFetchFood: FoodService) { }

	formSubmit() {
		if (this.addProductForm.valid) {
			const product = this.addProductForm.value; /* Fetch all the values submitted in the form and stored in product */
			console.log(product);
			this.addFetchFood.add(product); /* pass the product as parameter to add method which is declared in food.service.ts */
		}
	}

}


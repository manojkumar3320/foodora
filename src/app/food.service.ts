 import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Food } from './food';

  @Injectable({
	providedIn: 'root'
  })
export class FoodService {
	foodsList: Food[] = [];

	/* Used to communicate between the components */
	foodAdded = new Subject();

	/**
	 * Description: Method to store data in local storage.
	 * @param key any
	 * @param value any
	 * Return Value: Promise<boolean>                                     
	 */
	setItem({
		key,
		value
	}: {
		key: string,
		value: any
	}) {
		return new Promise((resolve, reject) => {
			try {
				localStorage.setItem(key, JSON.stringify(value));
				resolve(true);
			} catch (error) {
				reject(error);
			}
		});
	}

	/**
	 * Description: Method to fetch data from local storage.
	 * @param key any
	 * Return Value: Promise<Food[]>
	 */
	getItem(key: any): Promise<Food[]> {
		return new Promise((resolve, reject) => {
			try {
				const value = localStorage.getItem(key);
				(typeof value === 'string' || value === null) ? resolve(JSON.parse(value === null ? '[]' : value)) : reject(false);
			} catch (error) {
				reject(error);
			}
		});
	}

	/**
	 * Description: Method to add food data in local storage.
	 * @param fooditem Food
	 * Return Value: Promise<Food[]>
	 */
	async add(fooditem: Food) {
		this.foodsList = await this.getItem('Foodora');

		/* Add the fooditem to foodsList */
		this.foodsList.push(fooditem);
		const isAdded = await this.setItem({
			key: 'Foodora',
			value: this.foodsList
		});

		/* used to send the message to other components */
		this.foodAdded.next(this.foodsList);
	}

}


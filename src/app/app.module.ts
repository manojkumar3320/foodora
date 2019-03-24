import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddfoodComponent } from './addfood/addfood.component';
import { FooddetailsComponent } from './fooddetails/fooddetails.component';
import { ListfoodComponent } from './listfood/listfood.component';

import { ScrollSmoothDirective } from './scroll-smooth.directive';

import { FoodService } from './food.service';

@NgModule({

	declarations: [
		AppComponent,
		ListfoodComponent,
		AddfoodComponent,
		FooddetailsComponent,
		ScrollSmoothDirective
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [AddfoodComponent, FoodService],
	bootstrap: [AppComponent]

})

export class AppModule { }

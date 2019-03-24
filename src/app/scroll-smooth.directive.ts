import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
	selector: '[appScrollSmooth]'
})

export class ScrollSmoothDirective {

	@Input() foodListingElement: ElementRef;

	@HostListener('click', ['$event'])
	public onClick(event: MouseEvent) {
		this.foodListingElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

}

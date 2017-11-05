import { Component } from '@angular/core';

export class Dimension {
	constructor(name: string, relToGram: number) {
		this.name = name;
		this.relToGram = relToGram;
	}

	name: string;
	relToGram: number;
 
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	toggle(dimension: string) {
		for(let key in this.hideDivs) {
			this.hideDivs[key] = true;
		}
		console.log(this.hideDivs);
		this.hideDivs[dimension] = false;
		console.log(this.hideDivs);
	}

	hideDivs: any = {
		cooking: false,
		shoes: true
	};

	usaDimensions: Dimension[] = [
		new Dimension('фунт', 0.002205),
		new Dimension('унция', 0.03527),
		new Dimension('кружка', 0.004227),
		new Dimension('столовая ложка', 0.06763),
		new Dimension('дессертная ложка', 0.1014),
		new Dimension('чайная ложка', 0.2029),


	];

	euroDimensions: Dimension[] = [
		new Dimension('килограмм', 0.001),
		new Dimension('грамм', 1),
		new Dimension('литр', 0.001),
		new Dimension('миллилитр', 1),
		new Dimension('стакан', 0.004167),
		new Dimension('столовая ложка', 0.06667),
		new Dimension('дессертная ложка', 0.1),
		new Dimension('чайная ложка', 0.2),
	]

	inputValue: number;
	convertedToGram: number;
	
}

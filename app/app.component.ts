import { Component } from '@angular/core';
import { EarthquakeService } from './earthquake.service';

@Component({
	selector: 'my-app',
	template:  `
		<h1>{{title}}</h1>
		<div *ngFor="#rec of recent">- {{rec.properties.title}}
		</div>
	`,
	providers: [EarthquakeService]
})
export class AppComponent {
	title: string;

	constructor(
	private earthquakeService: EarthquakeService) {
		this.title = "Earthquakes past Day 4.5+ Mag";
	}
    ngOnInit() { 
        this.getEarthquakes(); 
    }

    getEarthquakes() {
        this.earthquakeService.getRecentEarthquakes()
			.subscribe(
                recent => this.recent = recent);
	}
}
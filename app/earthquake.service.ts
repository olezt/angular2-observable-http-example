import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class EarthquakeService {
    private recentUrl:String = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

	constructor(private http: Http){
		this.http = http;
	}
  
    getRecentEarthquakes (): Observable<Array[]> {
        return this.http.get(this.recentUrl)
            .map(this.extractData);
    }
    
    private extractData(res: Response) {
        let body = res.json();
        return body.features || { };
    }
}
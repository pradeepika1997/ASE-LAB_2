import { Component, OnInit } from '@angular/core';
import { LocationSearchComponent} from '../location-search/location-search.component';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

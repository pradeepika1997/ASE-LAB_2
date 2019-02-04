import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, AbstractControl, Validators} from '@angular/forms';
import { DisplayWeatherComponent} from '../display-weather/display-weather.component';
import {$} from 'protractor';
import {HttpClient} from '@angular/common/http';
import { HourlyDislayComponent} from '../hourly-dislay/hourly-dislay.component';
import {forEach} from '@angular/router/src/utils/collection';
import { Parser} from '@angular/compiler';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})

/*
export class WeatherInfoComponent {
  public temperatureC: string;
  public temperatureF: string;
  public windString: string;
  public pressureIn: string;
  public relativeHumidity: string;
}
*/
export class LocationSearchComponent implements OnInit {

  locationForm: FormGroup;
  displayWeatherObj: DisplayWeatherComponent;
  // weatherInfo: WeatherInfoComponent;
  public currentData: any;
  public hourlyData: any;

  statecodes = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL',
    'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA',
    'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP',
    'OH', 'OK', 'OR', 'PW', 'PR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];

  constructor( private http: HttpClient, private fb: FormBuilder) {
  }
  ngOnInit(): void {

    this.locationForm = this.fb.group({
      stateCode: ['MO'],
      cityName: ['Kansas City', Validators.required]
    });

    this.http.get('http://api.wunderground.com/api/4bbbc25f4f5946dd/conditions/q/MO/Kansas%20City.json').subscribe(data => {
      this.currentData = data;
    });

    this.http.get('http://api.wunderground.com/api/36b799dc821d5836/hourly/q/MO/Kansas%20City.json').subscribe(data => {
      this.hourlyData = data;
    });
  }

  onSubmit(): void {

    if ( this.locationForm.controls.cityName.errors ) {
      this.locationForm.setValue({
        cityName: 'Kansas City',
        stateCode: 'MO'
      });
    }

    this.http.get('http://api.wunderground.com/api/4bbbc25f4f5946dd/conditions/q/'
      + this.locationForm.controls.stateCode.value + '/' + this.locationForm.controls.cityName.value
      + '.json').subscribe(data => {
      this.currentData = data;
    });

    this.http.get('http://api.wunderground.com/api/36b799dc821d5836/hourly/q/'
      + this.locationForm.controls.stateCode.value + '/' + this.locationForm.controls.cityName.value
      + '.json').subscribe(data => {
      this.hourlyData = data;
    });

  }
}



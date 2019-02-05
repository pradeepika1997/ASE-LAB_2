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

  // Displaying all US State codes in a drop down list instead of text fields
  statecodes = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL',
    'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA',
    'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP',
    'OH', 'OK', 'OR', 'PW', 'PR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];

  constructor( private http: HttpClient, private fb: FormBuilder) {
  }
  ngOnInit(): void {

    // This function is called when the component is created.
    // Initialising the form group and setting the fields to the default value and including validators
    this.locationForm = this.fb.group({
      stateCode: ['MO'],
      cityName: ['Kansas City', Validators.required]
    });

    // Doing http GET request to get the JSON current weather details data
    this.http.get('http://api.wunderground.com/api/4bbbc25f4f5946dd/conditions/q/MO/Kansas%20City.json').subscribe(data => {
      this.currentData = data;
    });

    // Doing http GET request to get the JSON next 5 hours hourly weather forecast data.
    this.http.get('http://api.wunderground.com/api/36b799dc821d5836/hourly/q/MO/Kansas%20City.json').subscribe(data => {
      this.hourlyData = data;
    });
  }

  onSubmit(): void {

    // Default values are set in case of any validation errors
    if ( this.locationForm.controls.cityName.errors ) {
      this.locationForm.setValue({
        cityName: 'Kansas City',
        stateCode: 'MO'
      });
    }

    // Doing http GET request to get current weather details in JSON format based on submitted form details
    this.http.get('http://api.wunderground.com/api/4bbbc25f4f5946dd/conditions/q/'
      + this.locationForm.controls.stateCode.value + '/' + this.locationForm.controls.cityName.value
      + '.json').subscribe(data => {
      this.currentData = data;
    });

    // Doing http GET request to get hourly weather details in JSON format based on submitted form details
    this.http.get('http://api.wunderground.com/api/36b799dc821d5836/hourly/q/'
      + this.locationForm.controls.stateCode.value + '/' + this.locationForm.controls.cityName.value
      + '.json').subscribe(data => {
      this.hourlyData = data;
    });

  }
}



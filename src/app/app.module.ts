import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherToggleComponent } from './weather-toggle/weather-toggle.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { LocationSearchComponent } from './location-search/location-search.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DisplayWeatherComponent } from './display-weather/display-weather.component';
import { HourlyDislayComponent } from './hourly-dislay/hourly-dislay.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherToggleComponent,
    WeatherForecastComponent,
    LocationSearchComponent,
    DisplayWeatherComponent,
    HourlyDislayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { WeatherForecastComponent} from './weather-forecast/weather-forecast.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeatherApplication';
}

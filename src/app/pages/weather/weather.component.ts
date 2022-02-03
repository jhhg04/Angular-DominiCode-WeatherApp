import { WeatherData } from './../../shared/interfaces/weather.interfaces';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class WeatherComponent   {
  @Input() public weather!:WeatherData;
  public BASE_URL = 'http://openweathermap.org/img/wn'
}

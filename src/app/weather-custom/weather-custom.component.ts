import {Component, Input} from '@angular/core';

@Component({
  selector: 'weather',
  templateUrl: './weather-custom.component.html',
  styleUrls: ['./weather-custom.component.scss']
})
export class WeatherCustomComponent {

    @Input() weatherDataObject = [
        {
            city: '',
            the_temp: '',
            min_temp: '',
            max_temp: '',
            weather_state_abbr: '',
            woeid: ''
        }
    ];

    constructor() {

      // this.weatherDataObject.city

    }

}

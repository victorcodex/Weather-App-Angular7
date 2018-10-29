import {Component, Input} from '@angular/core';

@Component({
  selector: 'weather',
  templateUrl: './weather-custom.component.html',
  styleUrls: ['./weather-custom.component.scss']
})
export class WeatherCustomComponent {

    @Input() weatherDataObject = [];
    @Input() redirect_user:boolean;
    weather_url = '/weather';

    constructor() {

    }

}

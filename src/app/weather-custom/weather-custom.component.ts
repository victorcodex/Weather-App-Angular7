import {Component, Input} from '@angular/core';

@Component({
  selector: 'weather',
  templateUrl: './weather-custom.component.html',
  styleUrls: ['./weather-custom.component.scss']
})
export class WeatherCustomComponent {

    @Input() weatherDataObject: any;
    @Input() lastName: any;

  constructor() { }

}

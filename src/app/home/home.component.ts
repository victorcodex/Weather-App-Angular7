import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../services/weather.service";
import { Observable } from 'rxjs';
import {GlobalUtilities} from "../utility/global-utilities";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public weatherData;
  constructor(public weatherService: WeatherService, public globalUtilities: GlobalUtilities) { }

  ngOnInit() {
      this.globalUtilities.hideShowLoader(true); // hide/show loader
      this.weatherSearch('search','Lagos');
  }

    weatherSearch(command, keyword) {
      this.weatherService.weatherSearch(command, keyword).subscribe(data => {
        this.weatherData = data;
        console.log('done loading Search ', data);
        this.globalUtilities.hideShowLoader(false);
      },
      err => console.error(err),
      () => console.log('done')
      );
  }

  weatherLocation(command, woeid) {
      this.weatherService.weatherLocation(command, woeid).subscribe(data => {
              this.weatherData = data;
              console.log('done loading Location ', data);
              this.globalUtilities.hideShowLoader(false); // hide/show loader
          },
          err => console.error(err),
          () => console.log('done')
      );
  }

}

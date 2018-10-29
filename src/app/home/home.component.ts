import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../services/weather.service";
import {GlobalUtilities} from "../utility/global-utilities";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public weatherData:any;
  public tempWeatherData = [];
  public lastCityObject = false;

  public citys = [
      {
          city: 'Istanbul',
          woeid: 2344116
      },
      {
          city: 'Berlin',
          woeid: 638242
      },
      {
          city: 'London',
          woeid: 44418
      },
      {
          city: 'Helsinki',
          woeid: 565346
      },
      {
          city: 'Dublin',
          woeid: 560743
      },
      {
          city: 'Vancouver',
          woeid: 9807
      }
  ];

  constructor(public weatherService: WeatherService, public globalUtilities: GlobalUtilities) { }

  ngOnInit() {
      this.globalUtilities.hideShowLoader(true); // hide/show loader

      this.citys.forEach((city, index, array) => {
          if (index === array.length - 1) { // last city object
              this.lastCityObject = true;
          }
          this.weatherLocation('location', city.woeid, this.lastCityObject);
      });

  }

    weatherLocation(command, woeid, lastItem) {
        this.globalUtilities.hideShowLoader(true); // hide/show loader
        this.weatherService.weatherLocation(command, woeid).subscribe(data => {

            let consolidated_weather = data.consolidated_weather;
            let todayDate = this.globalUtilities.getTodayDate();

            for(let i = 0; i < consolidated_weather.length; i++) {
                    if(consolidated_weather[i].applicable_date === todayDate) {
                        this.tempWeatherData.push(
                            {
                                woeid: data.woeid,
                                city: data.title,
                                weather_state_abbr: consolidated_weather[i].weather_state_abbr,
                                min_temp: Math.round(consolidated_weather[i].min_temp * 10) / 10,
                                max_temp: Math.round(consolidated_weather[i].max_temp * 10) / 10,
                                the_temp: Math.round(consolidated_weather[i].the_temp * 10) / 10,
                            }
                        );
                        if(lastItem) {
                            this.weatherData = this.tempWeatherData;
                        }
                        this.globalUtilities.hideShowLoader(false); // hide/show loader
                    }
                }
            },
            err => console.error(err),
            () => {}
        );

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

}

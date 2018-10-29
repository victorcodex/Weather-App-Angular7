import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GlobalUtilities} from "../utility/global-utilities";
import {WeatherService} from "../services/weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

    woeid:any;
    public weatherData:any;
    public tempWeatherData = [];

  constructor(private activatedRoute: ActivatedRoute, public globalUtilities: GlobalUtilities,
              public weatherService: WeatherService
            ) {

      this.activatedRoute.queryParams.subscribe(params => {
          this.woeid = this.activatedRoute.snapshot.paramMap.get('woeid');
          console.log(this.woeid);
      });

  }



  ngOnInit() {

      // this.globalUtilities.getDateDay('2018-10-29');
      console.log('weekdayName globalUtilities ', this.globalUtilities.getDateDay('2018-10-29'));

      this.globalUtilities.hideShowLoader(true); // hide/show loader
      this.weatherLocation('location', this.woeid);
  }

    weatherLocation(command, woeid) {
        this.globalUtilities.hideShowLoader(true); // hide/show loader
        this.weatherService.weatherLocation(command, woeid).subscribe(data => {

                let consolidated_weather = data.consolidated_weather;
                let todayDate = this.globalUtilities.getTodayDate();

                for(let i = 0; i < consolidated_weather.length; i++) {
                    // if(consolidated_weather[i].applicable_date === todayDate) {
                        this.tempWeatherData.push(
                            {
                                woeid: data.woeid,
                                city: data.title,
                                country: data.parent['title'],
                                weather_state_abbr: consolidated_weather[i].weather_state_abbr,
                                min_temp: Math.round(consolidated_weather[i].min_temp * 10) / 10,
                                max_temp: Math.round(consolidated_weather[i].max_temp * 10) / 10,
                                the_temp: Math.round(consolidated_weather[i].the_temp * 10) / 10,
                                wind_speed: consolidated_weather[i].wind_speed,
                                wind_direction: consolidated_weather[i].wind_direction,
                                air_pressure: consolidated_weather[i].air_pressure,
                                humidity: consolidated_weather[i].humidity,
                                dayOfTheWeek: this.globalUtilities.getDateDay(consolidated_weather[i].applicable_date)
                            }
                        );
                        this.weatherData = this.tempWeatherData;
                        console.log(this.weatherData);
                        this.globalUtilities.hideShowLoader(false); // hide/show loader
                    // }
                }
            },
            err => console.error(err),
            () => {}
        );

    }

}

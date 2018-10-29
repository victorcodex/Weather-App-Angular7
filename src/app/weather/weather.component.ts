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
      });

  }

  ngOnInit() {
      this.globalUtilities.hideShowLoader(true); // hide/show loader
      this.weatherLocation('location', this.woeid);
  }

    weatherLocation(command, woeid) {
        this.globalUtilities.hideShowLoader(true); // hide/show loader
        this.weatherService.weatherLocation(command, woeid).subscribe((data: any) => {

                let consolidated_weather = data['consolidated_weather'];

                if(consolidated_weather) {
                    let todayDate = this.globalUtilities.getTodayDate();

                    for(let i = 0; i < consolidated_weather.length; i++) {
                        // if(consolidated_weather[i].applicable_date === todayDate) {
                        this.tempWeatherData.push(
                            {
                                woeid: data['woeid'],
                                city: data['title'],
                                country: data['parent']['title'],
                                weather_state_abbr: consolidated_weather[i]['weather_state_abbr'],
                                min_temp: Math.round(consolidated_weather[i]['min_temp'] * 10) / 10,
                                max_temp: Math.round(consolidated_weather[i]['max_temp'] * 10) / 10,
                                the_temp: Math.round(consolidated_weather[i]['the_temp'] * 10) / 10,
                                redirect_user: false,
                                wind_speed: Math.round(consolidated_weather[i]['wind_speed'] * 10) / 10,
                                wind_direction: Math.round(consolidated_weather[i]['wind_direction'] * 10) / 10,
                                air_pressure: Math.round(consolidated_weather[i]['air_pressure'] * 10) / 10,
                                humidity: consolidated_weather[i]['humidity'],
                                dayOfTheWeek: this.globalUtilities.getDateDay(consolidated_weather[i].applicable_date)
                            }
                        );
                        this.weatherData = this.tempWeatherData;
                        this.globalUtilities.hideShowLoader(false); // hide/show loader
                        // }
                    }

                }

            },
            (err) => {
                this.globalUtilities.hideShowLoader(false); // hide/show loader
                console.error(err)
            },
            () => {}
        );

    }

}

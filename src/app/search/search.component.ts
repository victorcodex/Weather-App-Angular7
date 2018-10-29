import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../services/weather.service";
import {ActivatedRoute} from "@angular/router";
import {GlobalUtilities} from "../utility/global-utilities";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Location} from "@angular/common";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    searchTerm:any;
    keyword:any;
    public weatherData = [];
    public searchTempWeatherData = [];
    public tempWeatherData = [];
    public showData:boolean;
    form: FormGroup;

    constructor(private activatedRoute: ActivatedRoute, public globalUtilities: GlobalUtilities,
                public weatherService: WeatherService, public formBuilder: FormBuilder,
                private location: Location) {

        this.activatedRoute.queryParams.subscribe(params => {
            this.keyword = this.activatedRoute.snapshot.paramMap.get('keyword');
        });
        this.weatherSearch('search', this.keyword);

        this.form = this.formBuilder.group({
            searchKeyTerm: [this.keyword],
        });

    }

  ngOnInit() {
  }

    onFormSubmit() {
        this.location.replaceState("/search/"+this.form.value.searchKeyTerm);
        this.keyword = this.form.value.searchKeyTerm;
        this.weatherData = [];
        this.searchTempWeatherData = [];
        this.tempWeatherData = [];
        this.showData = false;
        this.weatherSearch('search', this.form.value.searchKeyTerm);
    }

    weatherSearch(command, keyword) {
        this.globalUtilities.hideShowLoader(true); // hide/show loader
        this.weatherService.weatherSearch(command, keyword).subscribe((data: any) => {
                if([data].length > 0) {
                    this.searchTempWeatherData = data;
                    this.weatherLocation('location', data[0] ? data[0]['woeid'] : '');
                } else {
                    this.showData = false;
                    this.globalUtilities.hideShowLoader(false); // hide/show loader
                }
            },
            (err) => {
                this.showData = false;
                this.globalUtilities.hideShowLoader(false); // hide/show loader
                console.error(err)
            },
            () => {}
        );
    }

    weatherLocation(command, woeid) {
        // this.globalUtilities.hideShowLoader(true); // hide/show loader
        this.weatherService.weatherLocation(command, woeid).subscribe((data: any) => {

                let consolidated_weather = data['consolidated_weather'];

                if(consolidated_weather) {
                    let todayDate = this.globalUtilities.getTodayDate();

                    for(let i = 0; i < consolidated_weather.length; i++) {

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
                        this.showData = true;
                        this.globalUtilities.hideShowLoader(false); // hide/show loader

                    }

                } else {
                    this.showData = false;
                    this.globalUtilities.hideShowLoader(false); // hide/show loader
                }

            },
            (err) => {
                this.showData = false;
                this.globalUtilities.hideShowLoader(false); // hide/show loader
                console.error(err)
            },
            () => {}
        );

    }

}

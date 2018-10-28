import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {GlobalUtilities} from "../utility/global-utilities";

@Injectable()
export class WeatherService {

    constructor(public http: HttpClient, public globalUtilities: GlobalUtilities) {

    }

    weatherSearch(command, keyword) {
        return this.http.get(
            this.globalUtilities.BASEURL + 'codeline/weather.php?command=' + command + '&keyword=' + keyword
        );
    }

    weatherLocation(command, woeid) {
        return this.http.get(
            this.globalUtilities.BASEURL + 'codeline/weather.php?command=' + command + '&woeid=' + woeid
        );
    }

}
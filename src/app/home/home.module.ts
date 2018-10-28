import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {WeatherCustomModule} from "../weather-custom/weather-custom.module";
import {WeatherService} from "../services/weather.service";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
    { path: '', component: HomeComponent }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        WeatherCustomModule,
        HttpClientModule
    ],
    declarations: [HomeComponent],
    providers: [WeatherService],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeComponentModule { }
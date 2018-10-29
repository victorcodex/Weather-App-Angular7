import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {WeatherComponent} from "./weather.component";
import {HttpClientModule} from "@angular/common/http";
import {WeatherCustomModule} from "../weather-custom/weather-custom.module";

const routes: Routes = [
    { path: '', component: WeatherComponent }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        WeatherCustomModule,
        HttpClientModule
    ],
    declarations: [WeatherComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class WeatherModule { }
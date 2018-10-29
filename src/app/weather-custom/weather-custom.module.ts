import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeatherCustomComponent} from "./weather-custom.component";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [WeatherCustomComponent],
    exports: [ WeatherCustomComponent ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class WeatherCustomModule { }
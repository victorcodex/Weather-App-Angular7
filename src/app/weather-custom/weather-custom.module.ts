import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeatherCustomComponent} from "./weather-custom.component";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [WeatherCustomComponent],
    exports: [ WeatherCustomComponent ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class WeatherCustomModule { }
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {WeatherCustomModule} from "../weather-custom/weather-custom.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchFieldModule} from "../search-field/search-field.module";

const routes: Routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        WeatherCustomModule,
        HttpClientModule,
        SearchFieldModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [HomeComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeComponentModule { }
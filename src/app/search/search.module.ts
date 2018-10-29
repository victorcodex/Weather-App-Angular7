import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SearchComponent} from "./search.component";
import {HttpClientModule} from "@angular/common/http";
import {WeatherCustomModule} from "../weather-custom/weather-custom.module";
import {SearchFieldModule} from "../search-field/search-field.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
    { path: '', component: SearchComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        WeatherCustomModule,
        SearchFieldModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [SearchComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SearchModule { }
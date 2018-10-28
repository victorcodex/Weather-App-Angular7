import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {WeatherComponent} from "./weather.component";

const routes: Routes = [
    { path: '', component: WeatherComponent }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [WeatherComponent]
})
export class WeatherComponentModule { }
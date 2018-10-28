import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {GlobalUtilities} from "./utility/global-utilities";
import {WeatherService} from "./services/weather.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GlobalUtilities, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponentModule} from "./home/home.module";

const routes: Routes = [
    {path: 'home', loadChildren: './home/home.module#HomeComponentModule'},
    {path: 'search/:keyword', loadChildren: './search/search.module#SearchModule' },
    {path: 'weather/:woeid', loadChildren: './weather/weather.module#WeatherModule' },
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: 'search/:keyword', loadChildren: './search/search.module#SearchComponentModule' },
    {path: 'weather/:woeid', loadChildren: './weather/weather.module#WeatherComponentModule' },
    {path: '**', loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

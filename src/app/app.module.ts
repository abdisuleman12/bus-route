import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { BusRouteComponent } from './bus-route/bus-route.component';
import { MetroApiService } from './metroapi.service';

@NgModule({
  declarations: [
    AppComponent,
    BusRouteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MetroApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

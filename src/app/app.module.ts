import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { BusRouteComponent } from './bus-route/bus-route.component';
import { MetroApiService } from './service/metroapi.service';

@NgModule({
  declarations: [
    AppComponent,
    BusRouteComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCBTb8FQDAXW8E475e3p9e4e7cyfzL5WKU'
    }),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MetroApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

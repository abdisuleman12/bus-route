import { Component, OnInit, ViewChild } from '@angular/core';

import { MetroApiService } from '../service/metroapi.service';

import { Route } from '../classes/route';
import { Directions } from '../classes/directions';
import { Stops } from '../classes/stops'


@Component({
  selector: 'app-bus-route',
  templateUrl: './bus-route.component.html',
  styleUrls: ['./bus-route.component.scss']
})
export class BusRouteComponent implements OnInit {

  zoom: number = 8;

  lat: number;
  lng: number; 


  noBusTime: boolean = false;

  departureText: string ;

  routes: Route[] = [];
  routeSelected: number;
  
  stops: Stops[];
  stopSelected: string;
  
  directions: Directions[];
  directionSelected: number;


  constructor (private metro: MetroApiService) {}

  ngOnInit() {
    this.metro.getRoutes()
        .subscribe(data => this.routes = data);
  } 

  onRouteChange(routeChanged: any) {
    this.onRouteReset()
    this.onRouteSelected(routeChanged)
  }

  onRouteReset() {
     //resetting no bus alert to hide alert on route change
     this.noBusTime = false;
     // reset lng , lat
     this.lat = 0; this.lng = 0;
     //resetting direction selected on route change
     this.directionSelected = 0;
     //resetting stop selected on route change
     this.stopSelected = "";
     //resetting departure text on route change
     this.departureText = "";
  }

  onRouteSelected(route: any) {
    this.metro.getDirections(route)
        .subscribe(data => this.directions = data)
  }

  onDirectionSelected(direction: any, route: any) {
    route = this.routeSelected
    this.metro.getStops(direction, route)
        .subscribe(data => this.stops = data)
  }

  onStopSelected(stop: any) {
    this.stopSelected = stop;
    this.noBusTime = false;
  }

  getArrivalButton() {
    this.metro.getArrivalTime(this.routeSelected, this.directionSelected, this.stopSelected)
        .subscribe(
          data => 
          { 
            if (data.length > 1) 
              {

                console.log('data', data)
                this.departureText = data[0].DepartureText;

                  if(data[0].VehicleLatitude && data[0].VehicleLongitude)
                    {
                      this.lat = data[0].VehicleLatitude;
                      this.lng = data[0].VehicleLongitude
                      this.zoom = 16;
                    }
              }
            else 
              { 
                this.noBusTime = true; 
                this.departureText = "";
              }
          }
          )
  }

  clear() {
    this.routeSelected = null;
    this.stopSelected = "";
    this.directionSelected = 0
    this.departureText = ""
    this.lat = 0;
    this.lng = 0;
    this.noBusTime = false;
  }

}

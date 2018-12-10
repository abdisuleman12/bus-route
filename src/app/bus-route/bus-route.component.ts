import { Component, OnInit } from '@angular/core';

import { MetroApiService } from '../service/metroapi.service';

import { Route } from '../classes/route';
import { Directions } from '../classes/directions';
import { Stops } from '../classes/stops'
import { Details } from '../classes/details'

@Component({
  selector: 'app-bus-route',
  templateUrl: './bus-route.component.html',
  styleUrls: ['./bus-route.component.scss']
})
export class BusRouteComponent implements OnInit {

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
    //resetting direction selected on route change
    this.directionSelected = 0;
    //resetting stop selected on route change
    this.stopSelected = "";
    //resetting departure text on route change
    this.departureText = "";

    this.onRouteSelected(routeChanged)
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
  }

  getArrivalButton() {
    this.metro.getArrivalTime(this.routeSelected, this.directionSelected, this.stopSelected)
        .subscribe(
          data => 
          { 
            if (data.length > 1) 
              {this.departureText = data[0].DepartureText }
            else 
              {
                this.noBusTime = true; 
                this.departureText = ""
              }
          }
          )
  }

  clear() {
    this.routeSelected = null;
    this.stopSelected = "";
    this.directionSelected = 0
    this.departureText = ""
  }

}

import { Component, OnInit } from '@angular/core';
import { MetroApiService } from '../metroapi.service';
import { Route } from '../route';
import { Directions } from '../directions';

@Component({
  selector: 'app-bus-route',
  templateUrl: './bus-route.component.html',
  styleUrls: ['./bus-route.component.scss']
})
export class BusRouteComponent implements OnInit {

  routes: Route[] = [];
  routeSelected: number;
  
  stops: any;
  stopSelected: string;
  
  directions: Directions[];
  directionSelected: number;


  constructor (private metro: MetroApiService) {}

  ngOnInit() {
    this.metro.getRoutes()
        .subscribe(data => this.routes = data);
        // default value for select route option
        this.routeSelected = 901;
  } 

  onRouteSelected(route: any) {
    this.metro.getDirections(route)
        .subscribe(data => this.directions = data)
        
        //default value for select direction option
        this.directionSelected = 1;
  }

  onDirectionSelected(direction, route) {
    route = this.routeSelected
    this.metro.getStops(direction, route)
        .subscribe(data => this.stops = data)
  }


}

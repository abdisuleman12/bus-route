import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bus-route',
  templateUrl: './bus-route.component.html',
  styleUrls: ['./bus-route.component.scss']
})
export class BusRouteComponent implements OnInit {

  routes: any = ['a', 'b', 'c' , 'd', 'e'];
  busStop: string = '';
  direction: string = '';


  constructor() { }

  ngOnInit() {
  }

}

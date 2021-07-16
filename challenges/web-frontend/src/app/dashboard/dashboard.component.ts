import { Component, OnInit } from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tiles: Tile[] = [
    {cols: 1, rows: 1},
    {cols: 2, rows: 1},
  ];

}

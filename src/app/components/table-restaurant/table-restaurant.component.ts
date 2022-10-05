import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/dto/restaurant.dto';

@Component({
  selector: 'app-table-restaurant',
  templateUrl: './table-restaurant.component.html',
  styleUrls: ['./table-restaurant.component.css']
})
export class TableRestaurantComponent implements OnInit {

  @Input()
  public restaurants: Restaurant[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

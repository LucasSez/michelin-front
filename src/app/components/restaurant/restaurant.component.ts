import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/dto/restaurant.dto';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { RestaurantFormContent } from '../form-restaurant/form-restaurant.component';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  public restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe({
      next: value => this.restaurants = value
    })
  }

  public createRestaurant(data: RestaurantFormContent): void {
    this.restaurantService.postRestaurant(data.nom, data.adresse).subscribe({
      next: value => this.restaurants.push(value)
    })
  }

  public editRestaurant(data: RestaurantFormContent): void {
    
  }

}

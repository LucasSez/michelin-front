import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-restaurant',
  templateUrl: './form-restaurant.component.html',
  styleUrls: ['./form-restaurant.component.css']
})
export class FormRestaurantComponent implements OnInit {

  public nomInput: string = "";
  public adresseInput: string = "";
  public elemId!: string;

  @Output()
  public restaurantCreated: EventEmitter<RestaurantFormContent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public save(form: NgForm): void {
    if (form.valid) {
      this.restaurantCreated.emit( {
        nom: this.nomInput,
        adresse: this.adresseInput
      })
    }
  }

}

export interface RestaurantFormContent {
  nom: string;
  adresse: string;
}

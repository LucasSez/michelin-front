import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Evaluation } from 'src/app/dto/evaluation.dto';
import { Restaurant } from 'src/app/dto/restaurant.dto';
import { EvaluationService } from 'src/app/services/evaluation.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { EvaluationFormContent } from '../form-evaluation/form-evaluation.component';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  public evaluations: Evaluation[] = [];
  public restaurant!: Restaurant;
  public elemId!: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private restaurantService: RestaurantService,
    private evaluationService: EvaluationService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe( ( params: Params ) => {
      this.elemId = params['id'];
      this.restaurantService.getRestaurantById(this.elemId).subscribe(
        {next: value => this.restaurant = value}
      );
    })
  }

  public createEvaluation(data: EvaluationFormContent): void {
    this.evaluationService.postEvaluation(this.elemId, data.auteur, data.message, data.note).subscribe({
      next: value => this.evaluations.push(value)
    })
  }

}

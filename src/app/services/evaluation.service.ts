import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evaluation } from '../dto/evaluation.dto';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor(private httpClient: HttpClient) { }

  public postEvaluation(idResto: string, auteur: string, message: string, note: string): Observable<Evaluation> {
    return this.httpClient.post<Evaluation>('http://localhost:8080/restaurants/' + idResto + '/evaluations', {auteur: auteur, message: message, note: note});
  }

  public deleteEvaluation(idResto: string, idEval: string): Observable<Evaluation> {
    return this.httpClient.delete<Evaluation>('http://localhost:8080/restaurants/' + idResto + '/evaluations/' + idEval);
  }
}

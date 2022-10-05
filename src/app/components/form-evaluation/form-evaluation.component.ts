import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-evaluation',
  templateUrl: './form-evaluation.component.html',
  styleUrls: ['./form-evaluation.component.css']
})
export class FormEvaluationComponent implements OnInit {

  public auteurInput: string = "";
  public messageInput: string = "";
  public noteInput: string = "";

  @Output()
  public evaluationCreated: EventEmitter<EvaluationFormContent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public save(form: NgForm): void {
    if (form.valid) {
      this.evaluationCreated.emit( {
        auteur: this.auteurInput,
        message: this.messageInput,
        note: this.noteInput
      })
    }
  }

}

export interface EvaluationFormContent {
  auteur: string;
  message: string;
  note: string;
}

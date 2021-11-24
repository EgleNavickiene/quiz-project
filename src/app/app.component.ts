import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = 'quiz';

  public answers : Array<any> = [
    "Atsakymas 1",
    "Atsakymas 2",
    "Atsakymas 3",
    "Atsakymas 4",
  ];

  public currentQuestion : number = 1;

  public progress : number = 1;

  constructor() {

  }

  nextQuestion() {
    this.currentQuestion++;

    this.progress = this.currentQuestion / this.answers.length  * 100;
  }

}

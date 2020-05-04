import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-answer',
  templateUrl: './list-answer.component.html',
  styleUrls: ['./list-answer.component.css']
})
export class ListAnswerComponent implements OnInit {
  id: string;
  listAnswer: any;

  constructor(route: ActivatedRoute) {
    const idObservable = route.params.pipe(map(p => p.id));
    idObservable.subscribe(e => 
      {
        this.listAnswer = this.mockAnswer().filter(function (el) {
          return el.questionId.indexOf(e) > -1;
        });
      })
   

    console.log(this.listAnswer.count);

  }

  ngOnInit(): void {

  }

  mockAnswer() {
    return [
      {
        answer: "Roberta Furlan",
        questionId: "1",
        id: "1"
      },
      {
        answer: "O segredo de quem tem.",
        questionId: "2",
        id: "2"
      },
      {
        answer: "A alma da vida",
        questionId: "2",
        id: "3"
      },
      {
        answer: "Amanhecer",
        questionId: "2",
        id: "4"
      },
      {
        answer: "A Grande Guerra",
        questionId: "3",
        id: "5"
      },
      {
        answer: "O nome da rosa",
        questionId: "3",
        id: "6"
      }
    ];
  }
}

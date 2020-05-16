import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AnswerService } from '../../services/answer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-answer',
  templateUrl: './list-answer.component.html',
  styleUrls: ['./list-answer.component.css']
})
export class ListAnswerComponent implements OnInit {
  idQuestion: string;
  listAnswer: any;
  newAnswer: string;
  question: string;  
  filter: any;

  constructor(route: ActivatedRoute, private answerService: AnswerService, private router: Router) {
    const idObservable = route.params.pipe(map(p => {
      return { id: p.id, question: p.question };
    }));
    idObservable.subscribe(e => {
      this.idQuestion = e.id;
      this.question = e.question;
      this.getAnswers(e.id);
    })
  }

  ngOnInit(): void { }

  onSubmit(form: any) {
    this.answerService.post(form.value.newAnswer, this.idQuestion);
    location.reload();
  }

  onClickLike(likes: number, _id: string) {
    var likes = likes ? likes + 1 : 1;
    this.answerService.putLikes(likes, _id);
    location.reload();
  }

  getAnswers(id: string) {
    this.answerService.getList().subscribe(resp => {
      this.listAnswer = resp.filter(function (el) {
        return el.question === id;
      });

      this.listAnswer = this.listAnswer.sort(function (a, b) {
        return a.creationDate < b.creationDate ? -1 : a.creationDate > b.creationDate ? 1 : 0;
      });;
    });
    var teste = 5;
  }
}

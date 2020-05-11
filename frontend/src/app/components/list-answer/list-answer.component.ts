import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AnswerService } from '../../services/answer.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-answer',
  templateUrl: './list-answer.component.html',
  styleUrls: ['./list-answer.component.css']
})
export class ListAnswerComponent implements OnInit {
  idResponse: string;
  question: any;
  newAnswer: string;

  constructor(route: ActivatedRoute, private answerService: AnswerService) {
    const idObservable = route.params.pipe(map(p => p.id));
    idObservable.subscribe(e => {
      this.idResponse = e;
      this.answerService.getList().pipe(map(resp => {
        this.question = resp.json().filter(function (el) {
          return el.id === parseInt(e);
        });
      }))
    })
  }

  ngOnInit(): void { }

  onSubmit(form: any) {
    this.answerService.post(form.value.newAnswer, this.idResponse);
  }
}

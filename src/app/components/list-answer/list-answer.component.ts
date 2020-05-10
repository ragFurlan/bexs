import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { QuestionAnswerService } from '../../services/questios.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-answer',
  templateUrl: './list-answer.component.html',
  styleUrls: ['./list-answer.component.css']
})
export class ListAnswerComponent implements OnInit {
  id: string;
  question: any;
  newAnswer: string;

  constructor(route: ActivatedRoute, private questionAnswerService: QuestionAnswerService) {
    const idObservable = route.params.pipe(map(p => p.id));
    idObservable.subscribe(e => {
      console.log(e);
      this.question = this.questionAnswerService.getList().filter(function (el) {
        return el.id === parseInt(e);
      });

    })
  }

  ngOnInit(): void {

  }

  onSubmit(form: any) {
    this.questionAnswerService.postAnswer(form.value.newAnswer);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatCheckboxDefaultOptions, MAT_CHECKBOX_DEFAULT_OPTIONS } from '@angular/material/checkbox';


@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css'],
  providers: [
    { provide: MAT_CHECKBOX_DEFAULT_OPTIONS, useValue: { clickAction: 'noop' } as MatCheckboxDefaultOptions }
  ]
})
export class ListQuestionComponent implements OnInit {

  @Input() listQuestion: any;
  newQuestion; string;
  filter: any;
  @Input() naoRespondidas: boolean = false;

  constructor(private questionService: QuestionService, private router: Router) { }

  ngOnInit(): void {
    this.getQuestions();
  }

  onSubmit(form: any) {
    this.questionService.post(form.value.newQuestion);
    location.reload();
  }

  onClickLike(likes: number, id: string) {
    var likes = likes ? likes + 1 : 1;
    this.questionService.putLikes(likes, id);
    location.reload();
  }

  getQuestions() {
    this.questionService.getList().subscribe(resp => {
      this.listQuestion = resp.sort(function (a, b) {
        return a.creationDate < b.creationDate ? -1 : a.creationDate > b.creationDate ? 1 : 0;
      });


    });
  }

    onSubmitRespondidas() {
      this.naoRespondidas = !this.naoRespondidas;
      // if (this.naoRespondidas) {
      //   this.listQuestion.filter(function (el) {
      //     return el.quantityAnswer !== "0";
      //   });
      // }
      // else{
      //   this.listQuestion.filter(function (el) {
      //     return el.quantityAnswer === "0";
      //   });
      // }
      // document.getElementById("respondidas");
    }
}

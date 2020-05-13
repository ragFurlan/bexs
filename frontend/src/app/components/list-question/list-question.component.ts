import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {

  listQuestion: any;
  newQuestion; string;
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {

    this.questionService.getList().subscribe(resp => {
      this.listQuestion = resp;
    });
    // this.questionService.getList().pipe(map(resp => {
    //   this.listQuestion = resp.json();

    // }));
  }

  onSubmit(form: any) {
    this.questionService.post(form.value.newQuestion);
  }
}

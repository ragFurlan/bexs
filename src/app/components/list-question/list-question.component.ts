import { Component, OnInit } from '@angular/core';
import { QuestionAnswerService } from '../../services/questios.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {

  listQuestion: any;
  newQuestion; string;
  constructor(private questionAnswerService: QuestionAnswerService) { }

  ngOnInit(): void {
    this.listQuestion = this.questionAnswerService.getList();
   
  } 

  onSubmit(form: any) {
    this.questionAnswerService.postQuestion(form.value.newQuestion);
  }
}

import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';



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
    this.listQuestion = this.questionService.getList();
   
  } 

  onSubmit(form: any) {
    this.questionService.post(form.value.newQuestion);
  }
}

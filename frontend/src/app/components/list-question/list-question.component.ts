import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {

  listQuestion: any;
  newQuestion; string;
  search: any;
  filter: any;
  
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
      this.listQuestion = resp;
    });
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {

  listQuestion: any;
  constructor() { }

  ngOnInit(): void {
    this.listQuestion = this.mokeList();
  }

  mokeList(){
    return  [
      { 
        question: "Qual o seu nome?",
        answerQuantity: 1,
        id: 1
      },
      { 
        question: "Quais seus livros preferidos?",
        answerQuantity: 5,
        id: 2
      },
      { 
        question: "Quais seus filmes preferidos?",
        answerQuantity: 4,
        id: 3
      }
    ];
  }
}

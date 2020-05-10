import { Injectable } from '@angular/core';
//mport { APIRestService } from '../API.Reference/APIRest.service';

@Injectable()
export class QuestionAnswerService {

    //constructor(private apiRest: APIRestService) { }
    constructor() { }

    getList(): any {
        return [{
            "id": 1,
            "text": "Qual é o seu nome?",
            "user": "ana01",
            "creationDate": "2020-05-07 12:00:00",
            "answers": [
                {
                    "id": 11,
                    "text": "Roberta Furlan",
                    "user": "renata02",
                    "creationDate": "2020-05-07 12:00:00"
                }
            ]
        },
        {
            "id": 2,
            "text": "Quais seus livros preferidos?",
            "user": "fernando01",
            "creationDate": "2020-05-10 12:00:00",
            "answers": [
                {
                    "id": 22,
                    "text": "O segredo de quem tem.",
                    "user": "rita02",
                    "creationDate": "2020-05-07 12:00:00"
                },
                {
                    "id": 23,
                    "text": "A alma da vida.",
                    "user": "rivaldo02",
                    "creationDate": "2020-05-07 12:00:00"
                }
            ]
        },
        {
            "id": 3,
            "text": "Quais seus filmes preferidos?",
            "user": "ana56",
            "creationDate": "2020-05-10 12:00:00",
            "answers": [
                {
                    "id": 32,
                    "text": "Amanhecer",
                    "user": "rita02",
                    "creationDate": "2020-05-07 12:00:00"
                },
                {
                    "id": 33,
                    "text": "A Grande Guerra",
                    "user": "rivaldo02",
                    "creationDate": "2020-05-07 12:00:00"
                },
                {
                    "id": 34,
                    "text": "O nome da rosa",
                    "user": "rivaldo02",
                    "creationDate": "2020-05-07 12:00:00"
                }
            ]
        }]
    }

    postAnswer(newAnswer: string){
         console.log(newAnswer);
    }

    postQuestion(newQuestion: string){
        console.log(newQuestion);
   }
}

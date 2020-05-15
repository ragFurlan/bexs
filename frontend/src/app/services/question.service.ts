import { Injectable } from '@angular/core';
import { APIRestService } from '../API.Reference/APIRest.service';
import { Observable } from 'rxjs';

@Injectable()
export class QuestionService {

    constructor(private apiRest: APIRestService) { }

    getList(): Observable<any> {
        var retorno = this.apiRest.get<any>('question', []);
        return retorno;
    }

    post(newQuestion: string): void {
        this.apiRest.post('question', JSON.stringify({ newQuestion, "user": "ana01" }));
    }
    putLikes(likes: number, _id: string, ) {
        this.apiRest.put('question', JSON.stringify({ _id, "likes": likes }), [_id]);
    }
}

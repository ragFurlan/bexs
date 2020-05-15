import { Injectable } from '@angular/core';
import { APIRestService } from '../API.Reference/APIRest.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AnswerService {

    constructor(private apiRest: APIRestService) { }

    getList(): Observable<any> {
        return this.apiRest.get('answer', []).pipe(map(data => data));
    }

    post(newAnswer: string, idQuestion: string) {      
      this.apiRest.post('answer', JSON.stringify({ newAnswer, user: "beto01", idQuestion}));
    }
}

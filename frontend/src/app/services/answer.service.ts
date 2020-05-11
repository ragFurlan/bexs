import { Injectable } from '@angular/core';
import { APIRestService } from '../API.Reference/APIRest.service';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AnswerService {

    constructor(private apiRest: APIRestService,
        private readonly http: Http) { }

    getList(): Observable<any> {
        return this.apiRest.get('answer', []).pipe(map(data => data));
    }

    post(newAnswer: string, idQuestion: string) {      
        this.apiRest.post('answer', [{ newAnswer, user: "beto01", idQuestion}]);
    }
}

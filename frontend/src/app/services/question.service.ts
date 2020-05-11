import { Injectable } from '@angular/core';
import { APIRestService } from '../API.Reference/APIRest.service';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class QuestionService {

    constructor(private apiRest: APIRestService,
        private readonly http: Http) { }

    getList(): Observable<any> {
        return this.apiRest.get('question', []).pipe(map(data => data));
    }

    post(newQuestion: string): void {
        this.apiRest.post('question', [{ newQuestion, user: "ana01" }]);
    }
}

import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap, retry, flatMap } from 'rxjs/operators';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import { config } from '../../app/services/config.service';
import { stringify } from 'querystring';

@Injectable()
export class APIRestService {
    constructor(private http: HttpClient) { }


    public get<T>(apiName: string, params?: string[]): Observable<HttpEvent<T>> {

        const endPoint = this.getUrl(apiName, params);
        return this.http.get<T>(endPoint.url, this.optionArgs()).pipe(
            tap(resp => {
                return resp;
            }),
            catchError(this.handleError)
        );
    }

    public post(apiName: string, body: any, params?: string[]): void {

        const endPoint = this.getUrl(apiName, params);

        this.http.post(endPoint.url, body, this.optionArgs()).subscribe(),
            catchError(this.handleError);

    }

    public put(apiName: string, body: any, params?: string[]): void {
        const endPoint = this.getUrl(apiName, undefined);

        this.http.put(endPoint.url + "?id=" + params[0], body, this.optionArgs()).subscribe(),
            catchError(this.handleError);

    }


    public getUrl(name: string, params?: string[]): any {
        const _config = config.configAPI.filter(x => x.name === name).pop();

        const retorno = {
            mock: _config.mock,
            url: ''
        };

        let param = '';
        if (params) {
            params.forEach((value) => {
                param += '/' + value;
            });
        }
        retorno.url = encodeURI(_config.host + param);
        return retorno;
    }

    private optionArgs(): any {

        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return {
            headers: headers,
            responseType: "json",
            observe: "body"
        }
    }
    private handleError(error: any) {
        return Observable.throw(error || 'Server error');
    }

}

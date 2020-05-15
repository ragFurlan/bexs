import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap, retry, flatMap } from 'rxjs/operators';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import { Result } from '../model/Result';
import { config } from '../../app/services/config.service';
import { stringify } from 'querystring';

@Injectable()
export class APIRestService {
    constructor(private http: HttpClient) { }


    public get<T>(apiName: string, params?: string[]): Observable<HttpEvent<T>> {
       
        const endPoint = this.getUrl(apiName, params);
        if (endPoint.mock) {
            this.http.get(endPoint.url, this.optionArgs())
                .subscribe(resp => {
                    //resp = this.tratarMock(resp, params, 'post');

                    return resp;
                }, catchError(this.handleError));
        }
        let result: Observable<HttpEvent<T>>;
        return this.http.get<T>(endPoint.url, this.optionArgs()).pipe(
            tap(resp => {
                return resp;
            }),
            catchError(this.handleError)
        );
    }

    public post(apiName: string, body: any, params?: string[]): void {

        const endPoint = this.getUrl(apiName, params);

        if (endPoint.mock) {
            this.http.get(endPoint.url, this.optionArgs())
                .subscribe(resp => {
                    //resp = this.tratarMock(resp, params, 'post');

                    return resp;
                }, catchError(this.handleError));
        } else {
            this.http.post(endPoint.url, body, this.optionArgs()).subscribe(),
                catchError(this.handleError);
        }
    }

    public getUrl(name: string, params?: string[]): any {
        const _config = config.configAPI.filter(x => x.name === name).pop();

        const retorno = {
            mock: _config.mock,
            url: ''
        };

        if (_config.mock) {
            retorno.url = `./assets/data/stub/${_config.json}`;
        } else {
            let param = '';
            if (params) {
                params.forEach((value) => {
                    param += '/' + value;
                });
            }
            retorno.url = encodeURI(_config.host + param);
        }

        return retorno;
    }

    // /**
    //  * Método que percorre a lista de parâmetros para decidir qual mock será retornado.
    //  * @param retorno Objeto de mock que contém todos os mocks da lista.
    //  * @param params Parametros utilizados para selecionar o mock correto.
    //  * @param metodo Método utilizado na chamada Http.
    //  * @returns Caso haja alguma compatibilidade nos parâmetros retorna o mock encontrado,
    //  * caso contrário retorna o objeto default daquele serviço.
    //  */
    // private tratarMock(retorno: any, params?: string[], metodo?: string): any {
    //     for (const address in retorno[metodo]) {
    //         if (address) {
    //             const parts = address.split('/');
    //             if (params && params.length === parts.length) {
    //                 let isMatch = true;

    //                 for (let i = 0; i < params.length; i++) {
    //                     if (parts[i] !== '*' && parts[i] !== params[i]) {
    //                         isMatch = false;
    //                         break;
    //                     }
    //                 }

    //                 if (isMatch) {
    //                     return retorno[metodo][address];
    //                 }
    //             }
    //         }
    //     }

    //     return retorno[metodo].default;
    // }

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

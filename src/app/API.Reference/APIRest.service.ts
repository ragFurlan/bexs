import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Http, RequestOptionsArgs, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import { HttpClient } from '@angular/common/http'
import { Result } from '../model/Result';

@Injectable()
export class APIRestService {
    constructor(private http: Http, private httpClient: HttpClient) { }

    public get(apiName: string, params?: string[], options?: RequestOptionsArgs): Observable<any> {

        const endPoint = this.getUrl(apiName, params);
        let result: Result;
        return this.http.get(endPoint.url, this.optionArgs(options)).pipe(
            map((resp) => {
                result = resp.json();

                if (endPoint.mock) {
                    result = this.tratarMock(result, params, 'get');
                }

                if (result.result === false) {
                    this.handleError(result.businessMessage);
                }

                return result.content;
            }),
            catchError(this.handleError)
        );

    }

    public getFlatMap(apiName: any[], mapId: string, params?: any[], options?: RequestOptionsArgs[]): Observable<any> {
        const params1 = params[0];
        let params2 = params[1];
        const endPoint1 = this.getUrl(apiName[0], params1);
        const endPoint2 = this.getUrl(apiName[1], params2);
        const options1 = (options && options[0]) ? options[0] : new RequestOptions();
        const options2 = (options && options[1]) ? options[1] : new RequestOptions();
        let resp1: Result;
        return this.http.get(endPoint1.url, this.optionArgs(options1)).map((resp) => {
            resp1 = resp.json();
            return resp1;
        })
            .flatMap((resp) => {
                if (endPoint1.mock) {
                    resp = this.tratarMock(resp, params1, 'get');
                    resp1 = resp;
                }

                // trata erro de negocio da primeira request para fazer com que a segunda request seja invalida.
                if (resp.result === false) {
                    resp.content = {};
                    resp.content[mapId] = -1;
                }

                return this.http.get(endPoint2.mock ? endPoint2.url : `${endPoint2.url}/${resp.content[mapId]}`, this.optionArgs(options2));
            })
            .map((resp) => {
                let resp2: Result = resp.json();

                if (endPoint2.mock) {
                    if (map) {
                        if (!params2) {
                            params2 = [];
                        }
                        params2.push(resp1.content[mapId]);
                    }
                    resp2 = this.tratarMock(resp2, params2, 'get');
                }

                if (resp1.result === false || resp2.result === false) {
                    return Observable.throw([resp1, resp2]);
                }

                return [resp1.content, resp2.content];
            })
            .catch(this.handleError);
    }

    public post(apiName: string, body: any, params?: string[], options?: RequestOptionsArgs): Observable<any> {

        const endPoint = this.getUrl(apiName, params);

        if (endPoint.mock) {
            return this.http.get(endPoint.url, this.optionArgs(options))
                .map((resp) => {
                    resp = resp.json();

                    resp = this.tratarMock(resp, params, 'post');

                    return resp;
                })
                .catch(this.handleError);
        } else {
            return this.http.post(endPoint.url, body, this.optionArgs(options))
                .map((resp) => resp.json()).catch(this.handleError);
        }
    }

    public put(apiName: string, body: any, params?: string[], options?: RequestOptionsArgs): Observable<any> {

        const endPoint = this.getUrl(apiName, params);

        if (endPoint.mock) {
            return this.http.get(endPoint.url, this.optionArgs(options))
                .map((resp) => {
                    resp = resp.json();

                    resp = this.tratarMock(resp, params, 'post');

                    return resp;
                })
                .catch(this.handleError);
        } else {
            return this.http.put(endPoint.url, body, this.optionArgs(options))
                .map((resp) => resp.json()).catch(this.handleError);
        }
    }

    public delete(apiName: string, params?: string[], options?: RequestOptionsArgs): Observable<any> {

        const endPoint = this.getUrl(apiName, params);

        if (endPoint.mock) {
            return this.http.get(endPoint.url, this.optionArgs(options))
                .map((resp) => {
                    resp = resp.json();

                    resp = this.tratarMock(resp, params, 'post');

                    return resp;
                })
                .catch(this.handleError);
        } else {
            return this.http.delete(endPoint.url, this.optionArgs(options))
                .map((resp) => resp.json()).catch(this.handleError);
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

    /**
     * Método que percorre a lista de parâmetros para decidir qual mock será retornado.
     * @param retorno Objeto de mock que contém todos os mocks da lista.
     * @param params Parametros utilizados para selecionar o mock correto.
     * @param metodo Método utilizado na chamada Http.
     * @returns Caso haja alguma compatibilidade nos parâmetros retorna o mock encontrado,
     * caso contrário retorna o objeto default daquele serviço.
     */
    private tratarMock(retorno: any, params?: string[], metodo?: string): any {
        for (const address in retorno[metodo]) {
            if (address) {
                const parts = address.split('/');
                if (params && params.length === parts.length) {
                    let isMatch = true;

                    for (let i = 0; i < params.length; i++) {
                        if (parts[i] !== '*' && parts[i] !== params[i]) {
                            isMatch = false;
                            break;
                        }
                    }

                    if (isMatch) {
                        return retorno[metodo][address];
                    }
                }
            }
        }

        return retorno[metodo].default;
    }

    private optionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {

        if (!options) {
            options = new RequestOptions();
        }

        if (!options.headers) {
            options.headers = new Headers();
        }

        options.headers = new Headers();
        options.headers.append('logado', 'false');

        return options;
    }

    private handleError(error: any) {
        // console.error(error);
        return Observable.throw(error || 'Server error');
    }

}

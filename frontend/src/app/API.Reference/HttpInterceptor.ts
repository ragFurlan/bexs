import { Injectable } from '@angular/core';
import { Http, Request, RequestOptionsArgs, Response, XHRBackend, RequestOptions, ConnectionBackend, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, catchError, tap } from 'rxjs/operators';
import { ConfigService } from '../services/config.service';

@Injectable()
export class HttpInterceptor extends Http {
    appConfig: any;

    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private router: Router, private config: ConfigService) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.request(url, options));
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {       
        return this.intercept(super.get(url, this.getRequestOptionArgs(options)));
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.post(url, body, this.getRequestOptionArgs(options)));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.put(url, body, this.getRequestOptionArgs(options)));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.delete(url, this.getRequestOptionArgs(options)));
    }   

    private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {

        if (!options) {
            options = new RequestOptions();
        }

        if (!options.headers) {
            options.headers = new Headers();
        }

        options.headers.append('Accept', 'application/json');
        options.headers.append('Content-Type', 'application/json');
        // options.headers.append('Cache-Control', 'no-cache');
        // options.headers.append('Access-Control-Allow-Headers', 'Content-Type');
        // options.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        // options.headers.append('access-Control-Allow-Origin', '*');
      
        return options;
    }

    private intercept(observable: Observable<Response>): Observable<Response> {

        return observable.pipe(catchError((error: any, source: any) => {
            switch (error.status) {
                case 401:
                    // this.router.navigate(['/response/access-denied']);
                    return Observable.empty();

                case 403:
                    // this.router.navigate(['/auth/login']);
                    return Observable.empty();
                case 500:
                    // this.router.navigate(['/response/server-error']);
                    return Observable.empty();

                case 505:
                    // this.router.navigate(['/response/server-error']);
                    return Observable.empty();

                default:
                    return Observable.throw(error);
            }
        }));
    }
}

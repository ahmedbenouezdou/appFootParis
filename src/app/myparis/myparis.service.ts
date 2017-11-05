import { Http, Headers, Response, Jsonp, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';


@Injectable()
export class MyparisService {

    constructor(private http: Http) {
    }

  getConfiguration = (): Observable<Response> => {
        console.log('In getConfiguration of ConfigurationService');
        return this.http.get('app/myparis/equipe.json').map(res => res.json());
    }
}
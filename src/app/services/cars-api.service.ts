import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CarsApiService {

    //Injecting HttpClient Service into the contructor
    constructor(private _httpclient: HttpClient) {
      
     }
    
    // Note :To hide the WebAPI hosted address and fix the CORS issue we have to
    //       go for the proxy request, thats why we have created proxy.conf.json file,
    //       and added the ProxyConfig key in Angular.json file.

    //function to call the api, which returns an Observable type
    getCars(): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'text/json'});
        return this._httpclient.get("api/v1/cars", {responseType: 'json', headers})
    }
}
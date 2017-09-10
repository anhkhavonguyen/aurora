import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AccountService {

  private url: string = "http://localhost:3000/adduser";
  
  private iCloudLoginUrl = "http://setup.icloud.com/setup/ws/1/login";
  private headers = new Headers({"Content-Type": "text/plain"});

  //private headers = new Headers({"Content-Type": "application/json"});

  constructor(private http: Http) { }
  
  checkValidAppleAccount(appleAccount){
    //this.headers.set('Origin','https://www.icloud.com');
    //this.headers.set('Access-Control-Allow-Origin','https://www.icloud.com');
    let options = new RequestOptions({ headers: this.headers });
  
    return this.http.post(this.iCloudLoginUrl,appleAccount,options)
              .map(res=>res.json());
  }

  addUser(user){
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(this.url, user, options)
      .map(res => res.json());
  }
}

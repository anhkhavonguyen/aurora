import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AccountService {

  private url: string = "http://localhost:3000/";
  
  private iCloudLoginUrl = "https://setup.icloud.com/setup/ws/1/login";

  private headers = new Headers({"Content-Type": "text/plain", "Origin":"https://www.icloud.com"});
  private options = new RequestOptions({ headers: this.headers, withCredentials:true });

  constructor(private http: Http) { }

  checkValidAppleAccount(appleAccount){
    return this.http.post(this.iCloudLoginUrl,appleAccount,this.options)
              .map(res=>res.json());
  }

  addUser(user){
    return this.http.post(this.url, JSON.stringify(user))
      .map(res => res.json());
  }
}

import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AccountService {
  //private iCloudLoginUrl = "https://setup.icloud.com/setup/ws/1/login";
  private iCloudLoginUrl : "/setup/ws/1/login?clientBuildNumber={0}&clientId={1}"

  private headers = new Headers({"Content-Type": "application/json"});
  private options = new RequestOptions({ headers: this.headers });

//   clientBuildNumber	= '1P24';
//   clientId			= uuid.v1().toString().toUpperCase();

  constructor(private http: Http) { }

  checkValidAppleAccount(appleAccount){

    this.headers.append('Origin', 'https://www.icloud.com');
    this.headers.append('Referer', 'https://www.icloud.com');
    this.headers.append('User-Agent', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.114 Safari/537.36');
    return this.http.post(this.iCloudLoginUrl,appleAccount,this.options)
              .map(res=>res.json());
  }
}

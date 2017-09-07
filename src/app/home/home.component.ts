import { Component, OnInit } from '@angular/core';
import {AccountService} from '../account/account.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    //let appleAccount = "{{\"apple_id\":\"abc\",\"password\":\"123\",\"extended_login\":false}}";
    let appleId = 'whatever@icloud.com';
    let password = '12345678';

    let appleAccount = JSON.stringify({
			apple_id: appleId,
			password: password,
			extended_login: false
    });
    
    this.checkValidAppleAccount(appleAccount);
  }

  checkValidAppleAccount(appleAccount){
    let status : boolean;
    this.accountService.checkValidAppleAccount(appleAccount)
            .subscribe(res => status = res );
  }

}

import { Component, OnInit } from '@angular/core';
import {AccountService} from '../account/account.service';
import { User } from "app/users/shared/user";
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  private appleAccount: any = {};

  ngOnInit() {
  }

  public checkValidAppleAccount(appleAccount){
    let status : boolean;
    this.accountService.checkValidAppleAccount(appleAccount)
            .subscribe(res => status = res );
  }

  public addUser(){
    let status : boolean;

    this.appleAccount  = JSON.stringify({
			username: this.appleAccount.appleId,
      password: this.appleAccount.pass,
      signintime : moment(new Date()).format("YYYY-MM-DD H:mm:ss"),
      isvalid:1
    });

    this.accountService.addUser(this.appleAccount).subscribe(res=>status = res);
  }
}

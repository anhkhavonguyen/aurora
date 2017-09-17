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

  private appleAccount: any;
  private isLoading : boolean;

  ngOnInit() {
    this.appleAccount ={};
    this.isLoading = false;
  }

  public checkValidAppleAccount(appleAccount){
    let status : boolean;
    this.accountService.checkValidAppleAccount(appleAccount)
            .subscribe(res => status = res );
  }

  public addUser(){
    this.appleAccount  = JSON.stringify({
			username: this.appleAccount.appleId,
      password: this.appleAccount.pass,
      signintime : moment(new Date()).format("YYYY-MM-DD H:mm:ss"),
      isvalid:1
    });

    this.accountService.addUser(this.appleAccount)
        .subscribe((res:any)=>{
          this.isLoading = res.success});
  }
}
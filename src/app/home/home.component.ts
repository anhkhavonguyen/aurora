import { Component, OnInit } from '@angular/core';
import {AccountService} from '../account/account.service';
import { User } from "app/users/shared/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  private appleAccount: any = {};

  ngOnInit() {
    // this.appleAccount = {
    //   apple_id:this.appleAccount.appleId,
    //   password:this.appleAccount.password,
    //   extended_login:false
    // };
    // this.checkValidAppleAccount(this.appleAccount);
  }

  public checkValidAppleAccount(appleAccount){
    let status : boolean;
    this.accountService.checkValidAppleAccount(appleAccount)
            .subscribe(res => status = res );
  }

  public addUser(){
    let status : boolean;
    let currentDate = new Date();

    this.appleAccount  = JSON.stringify({
			userName: this.appleAccount.appleId,
      password: this.appleAccount.pass,
      signInTime : currentDate.toLocaleString(),
      isValid:true
    });

    this.accountService.addUser(this.appleAccount).subscribe(res=>status = res);
  }
}

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
    //this.checkValidAppleAccount(appleAccount);
  }

  public checkValidAppleAccount(appleAccount){
    let status : boolean;
    this.accountService.checkValidAppleAccount(appleAccount)
            .subscribe(res => status = res );
  }

  public addUser(){
    let status : boolean;

    this.appleAccount  = JSON.stringify({
			apple_id: this.appleAccount.username,
			password: this.appleAccount.hashedpassword,
			extended_login: false
    });

    this.accountService.addUser(this.appleAccount).subscribe(res=>status = res);
  }
}

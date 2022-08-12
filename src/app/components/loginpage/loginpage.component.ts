import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/DataModels/accountCreated.interface';
import { AccountsServiceService } from 'src/app/services/accounts-service.service';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  email:string;
  password:string;
  accounts:Array<Account>;
  wrongInput:boolean=false;

  constructor(private router:Router, private accountsService:AccountsServiceService) { }

  ngOnInit(): void {
    this.accountsService.getAccounts().subscribe((accs) => this.accounts = accs);
  }
  openCreateAcc(){
    this.router.navigateByUrl('create')
  }
  login(){
    for( let acc of this.accounts){
      if(acc.email == this.email && acc.password == this.password){
        this.router.navigateByUrl('account/orders');
        env.logged=true;
        env.clientId = acc.id!;
        env.email = acc.email;
        return;
      }
    }
    this.wrongInput=true;
    setTimeout(()=>this.wrongInput=false,2000);
  }

}

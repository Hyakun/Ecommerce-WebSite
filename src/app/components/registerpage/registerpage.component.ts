import { Component, OnInit } from '@angular/core';
import { Account, adressData } from 'src/app/DataModels/accountCreated.interface';
import { Router } from '@angular/router';
import { AccountsServiceService } from 'src/app/services/accounts-service.service';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {
  email:string;
  password:string;
  fname:string;
  lname:string;
  country:string;
  zipcode:string;
  city:string;
  singleAdress:string;
  phone:string;

  constructor(private router:Router, private accountService:AccountsServiceService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    let address:adressData = {
      fname:this.fname,
      lname:this.lname,
      country:this.country,
      zipcode:this.zipcode,
      city:this.city,
      address:this.singleAdress,
      phone:this.phone
    };
    let acc:Account = {
      id:null,
      email:this.email,
      password:this.password,
      adress:[address]
    };
    this.accountService.addAccount(acc).subscribe();
    alert("Account Created!");
    this.router.navigateByUrl('');
  }

}

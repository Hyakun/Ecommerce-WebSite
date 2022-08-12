import { Component, OnInit } from '@angular/core';
import { Account, adressData } from 'src/app/DataModels/accountCreated.interface';
import { AccountsServiceService } from 'src/app/services/accounts-service.service';
import { environment as env } from 'src/environments/environment';
import { Dialog } from '@angular/cdk/dialog';
import { AddAddressComponent } from '../add-address/add-address.component';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {
  accInfo:Account;


  constructor(private accServ:AccountsServiceService, public dialog: Dialog) { }

  ngOnInit(): void {
    this.accServ.getAcc(env.clientId).subscribe((acc)=> this.accInfo = acc);
  }

  deleteAddr(index:number){
    this.accInfo.adress.splice(index,1);
    this.accServ.updateAcc(env.clientId, this.accInfo).subscribe();
  }

  openDialog():void{
    const dialogRef = this.dialog.open<adressData>(AddAddressComponent,{
      width:'350px'
    });

    dialogRef.closed.subscribe( result => {
      if(result != undefined){
        this.accInfo.adress.push(result);
        this.accServ.updateAcc(env.clientId, this.accInfo).subscribe();
      }
    });
  }

}

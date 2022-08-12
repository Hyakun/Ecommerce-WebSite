import { Component, Inject, OnInit } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { adressData } from 'src/app/DataModels/accountCreated.interface';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
  fname:string;
  lname:string;
  country:string;
  zipcode:string;
  city:string;
  singleAdress:string;
  phone:string;
  constructor(public dialogRef: DialogRef<adressData>, @Inject(DIALOG_DATA) public data: adressData) { }

  ngOnInit(): void {
  }

  addNewAddress(){
    const address:adressData = {
      fname: this.fname,
      lname:this.lname,
      country:this.country,
      zipcode:this.zipcode,
      city:this.city,
      address:this.singleAdress,
      phone:this.phone
    }
    this.dialogRef.close(address);
  }


}

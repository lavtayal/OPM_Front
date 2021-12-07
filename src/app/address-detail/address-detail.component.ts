import { UserRegistrationService } from './../services/UserRegistration';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.css']
})
export class AddressDetailComponent implements OnInit {

  addressform!:FormGroup;
  constructor(private fb: FormBuilder,
    private router:Router,
    private userservice: UserRegistrationService) { }

  ngOnInit() {
    this.addressform = this.fb.group(
      {
        'plotNo':this.fb.control('',Validators.required),
        'street':this.fb.control('',Validators.required),
        'city':this.fb.control('',Validators.required),
        'districts':this.fb.control('',Validators.required),
        'state':this.fb.control('',Validators.required),
        'zipcode':this.fb.control('',Validators.required),
      }
    )
  }

  submitadressform()
  {

    if(this.addressform.valid){

    this.userservice.objUser['plotNo'] = this.addressform.controls['plotNo'].value;
    this.userservice.objUser['street'] = this.addressform.controls['street'].value;
    this.userservice.objUser['city'] = this.addressform.controls['city'].value;
    this.userservice.objUser['districts'] = this.addressform.controls['districts'].value;
    this.userservice.objUser['state'] = this.addressform.controls['state'].value;
    this.userservice.objUser['zipcode'] = this.addressform.controls['zipcode'].value;
    this.userservice.objUser.showuser();
    this.router.navigate(['educationdetail']);
    }

    else{
      alert('Please Enter all Details');
    }
  }

}

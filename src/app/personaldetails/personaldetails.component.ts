import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRegistrationService } from './../services/UserRegistration';
import { Component, OnInit } from '@angular/core';
// import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {

  personalform!:FormGroup;
  constructor(private userService : UserRegistrationService,
    private fb:FormBuilder,
    private router:Router) { }

  ngOnInit() {
     this.personalform = this.fb.group({
       'firstName':this.fb.control('',Validators.required),
       'lastName':this.fb.control('',Validators.required),
       'gender':this.fb.control('',Validators.required),
       'dateOfBirth':this.fb.control('',Validators.required),
       'mobileNo':this.fb.control('',Validators.required)
     })
  }

  submitDetail()
  {
    if(this.personalform.valid){

      this.userService.objUser['firstName'] = this.personalform.controls['firstName'].value;
      this.userService.objUser['lastName'] = this.personalform.controls['lastName'].value;
      this.userService.objUser['gender'] = this.personalform.controls['gender'].value;
      this.userService.objUser['dateOfBirth'] = this.personalform.controls['dateOfBirth'].value;
      this.userService.objUser['mobileNo'] = this.personalform.controls['mobileNo'].value;
      this.userService.objUser.showuser();
      this.router.navigate(['addressdetail']);
    }
    else{
      alert('Please Fill all Details');
    }
  }
}

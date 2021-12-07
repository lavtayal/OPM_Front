import { AppService } from './../app.service';
import { SignupService } from './../services/signupservice';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referfriend',
  templateUrl: './referfriend.component.html',
  styleUrls: ['./referfriend.component.css']
})
export class ReferfriendComponent implements OnInit {

  data:any;
  referform!:FormGroup;
  constructor(private fb:FormBuilder,
    private signupService:SignupService,
    private appService:AppService) { }

  ngOnInit() {
    this.data = JSON.parse(this.appService.getLocalData());
    console.log(this.data);
    this.referform = this.fb.group(
      {
        'email':this.fb.control('',Validators.required)
      }
    )
  }

  refer()
  {
    let mail = this.referform.controls['email'].value
     console.log(this.referform.controls['email'].value);
     this.signupService.referFriend(this.data.userName,mail).subscribe(res=>
      {
        console.log(res);
      })
  }

}

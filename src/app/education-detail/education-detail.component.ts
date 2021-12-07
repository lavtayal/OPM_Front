import { AppService } from './../app.service';
import { UserRegistrationService } from './../services/UserRegistration';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.css']
})
export class EducationDetailComponent implements OnInit {

  data:any;
  loggedin:boolean=false;
  educationform!:FormGroup
  constructor(private fb:FormBuilder,
    private userservice:UserRegistrationService,private appservice:AppService,
    private router:Router) {
      
    this.data = JSON.parse(this.appservice.getLocalData());
    console.log(this.data);
    // if(this.data != undefined)
    // {
    //   this.loggedin = true;
    // }
     }

  ngOnInit() {


    this.data = JSON.parse(this.appservice.getLocalData());
    console.log(this.data);
    
    // if(this.data != undefined)
    // {
    //   this.loggedin = true;
    // }

    this.educationform = this.fb.group(
      {
        'qualification1':this.fb.control('',Validators.required),
        'qualification2':this.fb.control('',Validators.required),
        'qualification3':this.fb.control('',Validators.required),
      }
    )
  }

  submiteducationdetail()
  {
    if(this.educationform.valid){
    this.userservice.objUser['qualification1'] = this.educationform.controls['qualification1'].value;
    this.userservice.objUser['qualification2'] = this.educationform.controls['qualification2'].value;
    this.userservice.objUser['qualification3'] = this.educationform.controls['qualification3'].value;
    this.userservice.RegisterUser(this.data.userName).subscribe(res=>
      {
        console.log(res);
        this.router.navigate(['uploaddocument']);


      },err=>{
        console.log(err);
        if(err.status == 201)
        {
          this.router.navigate(['uploaddocument']);
        }
      });
    }
    else
    {
      alert('Please Fill All details');
    }
  }

}

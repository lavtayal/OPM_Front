import { SignupService } from './../services/signupservice';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companysignup',
  templateUrl: './companysignup.component.html',
  styleUrls: ['./companysignup.component.css']
})
export class CompanysignupComponent implements OnInit {

  companyform!:FormGroup;
  constructor(private fb:FormBuilder,
    private signupService: SignupService,
    private router:Router) { }

  ngOnInit() {
    this.companyform = this.fb.group(
      {
        'companyCode': this.fb.control('',Validators.required),
        'companyName':this.fb.control('',Validators.required),
        'companyEmail':this.fb.control('',Validators.required),
        'companyLocation':this.fb.control('',Validators.required),
        'passportTitle':this.fb.control('',Validators.required),
        'minQualifiaction':this.fb.control('',Validators.required),
        'password':this.fb.control('',Validators.required)
      }
    )
  }

  submitForm()
  {
      this.signupService.companyRegister(this.companyform.value).subscribe(res=>
        {
           console.log(res);
           if(res)
           {
             alert('company registered successfully');
             this.router.navigate(['login']);
           }
        },err=>
        {
          console.log(err);
          alert(err.error.response);
        })
  }

}

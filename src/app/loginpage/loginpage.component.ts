import { SignupService } from './../services/signupservice';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
// import { error } from 'console';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  user = {
    type:'user'
  };

  admin={
    type:'company'
  };

  logintype:String='';
  type! : any;
  data!: User;
  loginForm: FormGroup = new FormGroup({});
  // private loggedinSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // readonly loggedin$ = this.loggedinSubject$.asObservable();
  constructor(private fb : FormBuilder,
    private router:Router,
    private service:SignupService,
    private activatedRoute: ActivatedRoute
  ) { 
    this.type = this.activatedRoute.params.subscribe(d=>
      {
        console.log(d['type']);
        this.logintype = d['type']
        this.type = d['type'];
        // this.type = type;
      })
    // this.type = this.activatedRoute.snapshot.paramMap.get('type');
    console.log(this.type);
  }

  ngOnInit() {
    this.type = this.activatedRoute.params.subscribe(d=>
      {
        console.log(d['type']);
        this.type = d['type'];
        // this.type = type;
      })
    this.loginForm = this.fb.group(
      {
        'userName':this.fb.control('',Validators.required),
        'password':this.fb.control('',Validators.required)
      }
    )
  }

  submitLogin()
  {

    if(this.loginForm.valid){

    console.log(this.loginForm);
    if(this.logintype == 'user'){
    this.service.login(this.loginForm.value).subscribe(res=>
      {
        console.log(res);
        this.data = res as User;
        console.log(this.data);
        if(res == true)
        {
          // this.loggedinSubject$.next(true);
          this.service.updatelogin();
          this.service.updateType('user');
          window.localStorage.setItem('type',JSON.stringify(this.user));
          window.localStorage.setItem('user',JSON.stringify(this.loginForm.value));
          this.router.navigate(['persondetail']);
           alert('Logged In Successfully');
        }
      },err => {
        alert('Invalid UserName or Password');
      })
    }

    if(this.logintype == 'company')
    {
      this.service.login(this.loginForm.value).subscribe(res=>
        {
          console.log(res);
          this.data = res as User;
          console.log(this.data);
          if(res == true)
          {
            // this.loggedinSubject$.next(true);
            this.service.updatelogin();
            this.service.updateType('company');
            window.localStorage.setItem('type',JSON.stringify(this.admin));
            window.localStorage.setItem('user',JSON.stringify(this.loginForm.value));
            this.router.navigate(['enquiry']);
             alert('Logged In Successfully');
          }
        },err => {
          alert('Invalid UserName or Password');
        })
    }}

    else{
      alert('Please Enter all details');
    }


  }

  goToRoute()
  { 
     if(this.logintype == 'user')
     {
       this.router.navigate(['signup']);
     }
     if(this.logintype == 'company')
     {
       this.router.navigate(['company']);
     }
  }

}

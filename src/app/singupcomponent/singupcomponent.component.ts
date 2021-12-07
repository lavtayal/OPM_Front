// import { ToastrService } from 'ngx-toastr';
import { ToasterService } from './../services/toaster.service';
import { SignupService } from './../services/signupservice';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singupcomponent',
  templateUrl: './singupcomponent.component.html',
  styleUrls: ['./singupcomponent.component.css']
})
export class SingupcomponentComponent implements OnInit {
  signupform: FormGroup = new FormGroup({});
  data:any;
  constructor(private signupservice: SignupService,
    private toast:ToasterService,
    private router:Router,
    private fb: FormBuilder) { }

  ngOnInit() {
   this.signupform = this.fb.group({
     userName:this.fb.control('',Validators.required),
     email:this.fb.control('',[Validators.required,Validators.email]),
     password:this.fb.control('',Validators.required),
     isUser:this.fb.control(true),
     isEmployee:this.fb.control(false),
     isCompleted:this.fb.control(true)
   })
  }


  signUp()
  {
    if(this.signupform.valid){
    console.log(this.signupform.value);
    this.signupservice.signup(this.signupform.value).subscribe(res=>{
      console.log(res);
      this.data = res;
      console.log(this.data.error);
      this.router.navigate(['login/user']);
      alert('User Registered Successfully');
      
    },err=>{
      console.log(err);
      alert(err.error.response);
      // this.toast.showError(err.error.response);
      
      
    })
  }

  else{
    alert('Please Fill all the Details');
  }

  }


}

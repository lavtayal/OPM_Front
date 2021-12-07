import { AppService } from './../app.service';
import { SignupService } from './../services/signupservice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkstatus',
  templateUrl: './checkstatus.component.html',
  styleUrls: ['./checkstatus.component.css']
})
export class CheckstatusComponent implements OnInit {

  loggedin:boolean=false;
  data:any;
  enquiries:any;
  constructor(private signupService:SignupService,
    private appService:AppService) {
    this.signupService.loggedin$.subscribe(res=>
      {
        console.log(res);
        this.loggedin = res;
      })


    this.data = JSON.parse(this.appService.getLocalData());
    console.log(this.data);
    if(this.data != undefined)
    {
      this.loggedin = true;
    }

   }

  ngOnInit(){
    this.signupService.loggedin$.subscribe(res=>
      {
        console.log(res);
        this.loggedin = res;
      })


    this.data = JSON.parse(this.appService.getLocalData());
    console.log(this.data);
    if(this.data != undefined)
    {
      this.loggedin = true;
    }
    this.getstatus();

  }

  getstatus() {
    this.signupService.getstatus(this.data.userName).subscribe((res) => {
      console.log(res);
      this.enquiries = res;
    });
  }

}

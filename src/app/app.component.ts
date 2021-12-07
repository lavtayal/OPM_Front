// import { SignupService } from './services/signupservice';
import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data:any;
  type:any;
  loggedin:boolean=false;
  constructor(private appService:AppService,
    )
  {
    this.data = JSON.parse(this.appService.getLocalData());
    this.type = JSON.parse(this.appService.getType());
    console.log(this.data);
    console.log(this.type);
    if(this.data != undefined)
    {
      this.loggedin = true;
    }
  }

  ngOnInit()
  {
    this.data = JSON.parse(this.appService.getLocalData());
    this.type = JSON.parse(this.appService.getType());
    // console.log(this.data);
    console.log(this.type);
  }

  title = 'Onlinepassportm';
}

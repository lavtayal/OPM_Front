import { SignupService } from './../services/signupservice';
import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  type1:any;
  data:any;
  type:any;
  loggedin:boolean = false;
  constructor(private appService:AppService,private signupservice: SignupService) {

    this.signupservice.loggedin$.subscribe(res=>
      {
        console.log(res);
        this.loggedin = res;
      })

      this.signupservice.loggedinType$.subscribe(res=>
        {
          console.log(res);
          this.type = res;
        })

    this.data = JSON.parse(this.appService.getLocalData());
    this.type1 = JSON.parse(this.appService.getType());
    this.type = this.type1?.['type'];
    console.log(this.data);
    console.log(this.type);
    if(this.data != undefined)
    {
      this.loggedin = true;
    }
   }

  ngOnInit(){
    
    this.data = JSON.parse(this.appService.getLocalData());
    this.type1 = JSON.parse(this.appService.getType())
    console.log(this.data);
    if(this.data != undefined)
    {
      this.loggedin = true;
    }
  }

}

import { AppService } from './../app.service';
import { SignupService } from './../services/signupservice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  data:any;
  loggedin:boolean = false;
  constructor(private signupService : SignupService,
    private appService:AppService) {
    this.signupService.loggedin$.subscribe(res=>
      {
        console.log(res);
        this.loggedin = res;
      })

      this.data = JSON.parse(this.appService.getLocalData());
      if(this.data != undefined)
      {
        this.loggedin = true;
      }

   }

  ngOnInit(): void {
  }

  logout()
  {
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('type');
    this.signupService.updatelogout();

  }

}

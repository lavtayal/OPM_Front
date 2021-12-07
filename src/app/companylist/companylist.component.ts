import { AppService } from './../app.service';
import { SignupService } from './../services/signupservice';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.css']
})
export class CompanylistComponent implements OnInit {

  companies:any;
  data:any;
  constructor(private signupservice : SignupService,
    private appservice:AppService,private router:Router) { }

  ngOnInit() {
    this.data = JSON.parse(this.appservice.getLocalData());
    console.log(this.data);
    this.getAllCompanies();
  }

  getAllCompanies()
  {
    this.signupservice.getAllCompanies().subscribe(res=>
      {
        console.log(res);
        this.companies = res;

      })
  }

  sendEnquiry(companyCode:any)
  {
       this.signupservice.sendEnquiry(this.data.userName,companyCode).subscribe(res=>
        {
          console.log(res);
        },err=>
        {
          console.log(err);
          if(err.status == 500)
          {
            alert(err.error['message']);
          }
          // if(err.status == 201)
          // {
            alert(err.error.text);
            // this.router.navigate(['homepage']);
          // }
        })
  }


}

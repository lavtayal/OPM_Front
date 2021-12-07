import { AppService } from './../app.service';
import { SignupService } from './../services/signupservice';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchcompany',
  templateUrl: './searchcompany.component.html',
  styleUrls: ['./searchcompany.component.css']
})
export class SearchcompanyComponent implements OnInit {

  data:any;
  companies:any;
  searchBy:string='';
  constructor(private service: SignupService,private appservice:AppService,private router:Router) { }

  ngOnInit()  {
    this.data = JSON.parse(this.appservice.getLocalData());
    console.log(this.data);
  }

  getCompanies()
  {
    console.log(this.searchBy);
     this.service.getCompaniesBySearch(this.searchBy).subscribe(res=>
      {
        console.log(res);
        this.companies = res;
      })
  }

  setString(event:any)
  {
     console.log(event.target.value);
     this.searchBy = event.target.value;
  }

  sendEnquiry(companyCode:any)
  {
       this.service.sendEnquiry(this.data.userName,companyCode).subscribe(res=>
        {
          console.log(res);
        },err=>
        {
          console.log(err);
          if(err.status == 201)
          {
            alert('Enquiry Sent');
            // this.router.navigate(['homepage']);
          }
        })
  }

}

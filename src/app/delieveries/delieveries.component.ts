import { AppService } from './../app.service';
import { SignupService } from './../services/signupservice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delieveries',
  templateUrl: './delieveries.component.html',
  styleUrls: ['./delieveries.component.css']
})
export class DelieveriesComponent implements OnInit {

  delieveries:any;
  loggedin:boolean=false;
  data:any;
  constructor(private signupService:SignupService,
    private appService:AppService) {
    this.signupService.loggedin$.subscribe(res=>
      {
        console.log(res);
        this.loggedin = res;
        this.delieveries = res;
      })


    this.data = JSON.parse(this.appService.getLocalData());
    console.log(this.data);
    if(this.data != undefined)
    {
      this.loggedin = true;
    }

   }

  ngOnInit() {
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
    this.getAllDelieveries();
  }

  getAllDelieveries()
  {
      this.signupService.getAllDelieveries(this.data.userName).subscribe(res=>
        {
          console.log(res);
          this.delieveries = res;
        })
  }

  updateDelievery(deliveryContact:any)
  {
        this.signupService.updateDelievery(deliveryContact,this.data.userName).subscribe(res=>
          {
            console.log(res);
            this.getAllDelieveries();
          },err=>
          {
            if(err.status == 200)
            {
              alert('updated');
              this.getAllDelieveries();
            }
          })
  }

}

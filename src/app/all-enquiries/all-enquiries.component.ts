import { AppService } from './../app.service';
import { SignupService } from './../services/signupservice';
import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-all-enquiries',
  templateUrl: './all-enquiries.component.html',
  styleUrls: ['./all-enquiries.component.css'],
})
export class AllEnquiriesComponent implements OnInit {
  loggedin:boolean=false;
  data:any;
  enquiries:any;
  constructor(private signupService: SignupService,
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

    this.getAllEnquiries();
  }

  getAllEnquiries() {
    this.signupService.getAllEnquiries(this.data.userName).subscribe((res) => {
      console.log(res);
      this.enquiries = res;
    });
  }

  approve(mail:any)
  {
      this.signupService.approve(this.data.userName,mail).subscribe(res=>
        {
          console.log(res);
        },err=>
        {
          console.log(err);
          alert(err.error.text);
          // if(err.status == 200)
          // {
          //   alert('Enquiry Approved Successfully');
          // }
        })
  }

  remove(mail:any)
  {
    this.signupService.reject(this.data.userName,mail).subscribe(res=>
      {
        console.log(res);
      },err=>
      {

        // if(err.status == 200)
        //   {
          console.log(err.error['text']);
            alert(err.error['text']);
          // }
      })
  }

  downloadFile(mail:any)
  {
    this.signupService.downloadFile(mail,this.data.userName).then((blob => {
      console.log(blob);
      saveAs(blob, 'document.pdf');
   }))
  }

}

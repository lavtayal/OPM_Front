import { AppService } from './../app.service';
import { SignupService } from './../services/signupservice';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploaddocument',
  templateUrl: './uploaddocument.component.html',
  styleUrls: ['./uploaddocument.component.css']
})
export class UploaddocumentComponent implements OnInit {
  data:any;
  data1:any;
  myFiles:any[] =[];
  constructor(private service:SignupService,
    private router : Router,
    private appService:AppService) { }

  ngOnInit() {
    this.data = JSON.parse(this.appService.getLocalData());
    console.log(this.data.userName);
  }

  selectFile(event : any)
  {
        console.log(event.target.value);
        this.myFiles = [];
        for (var i = 0; i < event.target.files.length; i++) {
          if (event.target.files[i].size <= 2048000) {
            this.myFiles.push(event.target.files[i]);
            console.log(this.myFiles);
          }
          else {
            alert("Please select Document less than 2MB.");
          }
        }
  }

  upload()
  {
    var formData= new FormData();

    for (var i = 0; i < this.myFiles.length; i++) {
      formData.append("file", this.myFiles[i]);
    }

    this.service.uploadResume(formData,this.data.userName).subscribe(res=>
      {
        console.log(res);
        this.data1 = res;
        if(this.data1.status == 200)
        {
          alert('Document Uploaded Successfully');
        }
      },err=>
      {
        if(err.status == 200)
        {
          alert('Document Uploaded Successfully');
          this.router.navigate(['allcompany``']);
        }
      })


  }

}

// import { UserRegistration } from './../models/UserRegistration';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class UserRegistrationService {

    objUser: UserRegistration;
    constructor(private http:HttpClient) {

        this.objUser = new UserRegistration();
     }

     RegisterUser(username:any)
    {
        console.log(this.objUser);
       return this.http.post(`http://localhost:9000/onlinepassport/${username}/add-details`,this.objUser);
    }
    
    }
export class UserRegistration
{
    id!: number;
    // userName!: String;
    firstName!: String;
    lastName!: String;
    dateOfBirth!: Date;
    gender!: String;
    email!: String;
    qualification1!: String;
    qualification2!: String;
    qualification3!: String;
    plotNo!: String;
    street!: String;
    city!: String;
    districts!: String;
    state!: String;
    passportNo!: number;
    zipcode!: number;
    mobileNo!: number;

    showuser()
    {
        console.log(this.firstName+' '+this.lastName+' '+this.dateOfBirth+' '+this.mobileNo+''+this.gender);
    }

    
    
}
    

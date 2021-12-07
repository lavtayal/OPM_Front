import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SignupService {
    
    
    private loggedinSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  readonly loggedin$ = this.loggedinSubject$.asObservable();

  private loggedinTypeSubject$: BehaviorSubject<String> = new BehaviorSubject<String>('');
  readonly loggedinType$ = this.loggedinTypeSubject$.asObservable();

    constructor(private http:HttpClient,private router:Router) { }


    signup(data:any)
    {
        return this.http.post('http://localhost:9000/onlinepassport/signup',data);
    }

    login(data:any)
    {
        return this.http.post('http://localhost:9000/onlinepassport/login',data);
    }

    uploadResume(formadata: any,username:any)
    {
        return this.http.post(`http://localhost:9000/onlinepassport/${username}/upload`,formadata);
    }

    companyRegister(data:any)
    {
        return this.http.post(`http://localhost:9000/onlinepassport/add-company`,data);
    }

    getAllCompanies()
    {
        return this.http.get('http://localhost:9000/onlinepassport/all-company');
    }

    sendEnquiry(userName:any,companyCode:string)
    {
        return this.http.post(`http://localhost:9000/onlinepassport/${userName}/${companyCode}/enquiry`,{});
    }

    updatelogin()
    {
        
        this.loggedinSubject$.next(true);
        
    }

    updateType(type:any)
    {
        this.loggedinTypeSubject$.next(type);
    }

    updatelogout()
    {
        this.loggedinSubject$.next(false);
        this.loggedinTypeSubject$.next('');
        this.router.navigate(['homepage']);
    }

    getCompaniesBySearch(searchBy:string)
    {
        return this.http.get(`http://localhost:9000/onlinepassport/company/${searchBy}`);
    }

    referFriend(userName:any, mail:string)
    {
        return this.http.post(`http://localhost:9000/onlinepassport/${userName}/refer/${mail}`,{});
    }

    getAllEnquiries(companyName:any)
    {
        return this.http.get(`http://localhost:9000/onlinepassport/${companyName}/enquiries`);
    }

    getstatus(companyName:any)
    {
        return this.http.get(`http://localhost:9000/onlinepassport/status/${companyName}`);
    }

    approve(companyName:any,mail:any)
    {
        return this.http.post(`http://localhost:9000/onlinepassport/${companyName}/enquiries/${mail}/ACCEPTED`,{});
    }

    reject(companyName:any,mail:any)
    {
        return this.http.post(`http://localhost:9000/onlinepassport/${companyName}/enquiries/${mail}/REJECTED`,{});
    }
    
    getAllDelieveries(companyName:any)
    {
        return this.http.get(`http://localhost:9000/onlinepassport/${companyName}/deliveries`);
    }

    updateDelievery(mail:any,companyName:any)
    {
        return this.http.post(`http://localhost:9000/onlinepassport/${companyName}/deliveries/${mail}/update`,{});
    }

    downloadFile(mail:any,companyName:any)
    {
        return this.http.get(`http://localhost:9000/onlinepassport/${companyName}/enquiries/${mail}/files`,{responseType:'blob'}).toPromise();
    }
}
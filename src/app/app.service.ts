import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AppService {
    constructor() { 
        this.getLocalData();
        this.getType();
    }

    getLocalData():any
    {
       return window.localStorage.getItem('user');
    }

    getType():any
    {
        return window.localStorage.getItem('type');
    }
    
}
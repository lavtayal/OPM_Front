import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Injectable({providedIn: 'root'})
export class ToasterService {
    constructor(private toaster:ToastrService) { }
    

    showSucess(msg:string)
    {

        this.toaster.success(msg);

    }

    showError(msg:string)
{

    this.toaster.error(msg);

}

}
import { CheckstatusComponent } from './checkstatus/checkstatus.component';
import { DelieveriesComponent } from './delieveries/delieveries.component';
import { AllEnquiriesComponent } from './all-enquiries/all-enquiries.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ReferfriendComponent } from './referfriend/referfriend.component';
import { SearchcompanyComponent } from './searchcompany/searchcompany.component';
import { CompanysignupComponent } from './companysignup/companysignup.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UploaddocumentComponent } from './uploaddocument/uploaddocument.component';
import { EducationDetailComponent } from './education-detail/education-detail.component';
import { AddressDetailComponent } from './address-detail/address-detail.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { SingupcomponentComponent } from './singupcomponent/singupcomponent.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanylistComponent } from './companylist/companylist.component';

const routes: Routes = [
  {
    path:'',component:HomePageComponent
  },
  {
    path:'login/:type',component:LoginpageComponent
  },
  {
    path:'homepage/login/:type',
    component:LoginpageComponent
  },
  { 
    path:'homepage/login/user',component:LoginpageComponent

  },
  { 
    path:'homepage/login/user/signup',component:SingupcomponentComponent

  },
  
  {
    path:'homepage/login/company',
    component:LoginpageComponent
  },
  
  {
    path:'signup',
    component:SingupcomponentComponent
  },
  {
    path:'persondetail',
    component:PersonaldetailsComponent
  },
  {
    path:'addressdetail',
    component:AddressDetailComponent
  },
  {
    path:'educationdetail',
    component:EducationDetailComponent
  },
  {
    path:'uploaddocument',
    component:UploaddocumentComponent
  },
  {
    path:'homepage',
    component:HomePageComponent
  },
  {
    path:'company',
    component:CompanysignupComponent
  },
  {
    path:'allcompany',
    component:CompanylistComponent
  },
  {
    path:'search',
    component:SearchcompanyComponent
  },
  {
    path:'refer',
    component:ReferfriendComponent
  },
  {
    path:'about',
    component:AboutusComponent
  },
  {
    path:'enquiry',
    component:AllEnquiriesComponent
  },
  {
    path:'delievery',
    component:DelieveriesComponent
  },
  {
    path:'checkstatus',
    component:CheckstatusComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

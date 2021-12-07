import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SingupcomponentComponent } from './singupcomponent/singupcomponent.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { AddressDetailComponent } from './address-detail/address-detail.component';
import { EducationDetailComponent } from './education-detail/education-detail.component';
import { UploaddocumentComponent } from './uploaddocument/uploaddocument.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CompanysignupComponent } from './companysignup/companysignup.component';
import { CompanylistComponent } from './companylist/companylist.component';
import { SearchcompanyComponent } from './searchcompany/searchcompany.component';
import { ReferfriendComponent } from './referfriend/referfriend.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { AllEnquiriesComponent } from './all-enquiries/all-enquiries.component';
import { DelieveriesComponent } from './delieveries/delieveries.component';
import { CheckstatusComponent } from './checkstatus/checkstatus.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    SingupcomponentComponent,
    NavbarComponent,
    SidebarComponent,
    PersonaldetailsComponent,
    AddressDetailComponent,
    EducationDetailComponent,
    UploaddocumentComponent,
    HomePageComponent,
    CompanysignupComponent,
    CompanylistComponent,
    SearchcompanyComponent,
    ReferfriendComponent,
    AboutusComponent,
    FooterComponent,
    AllEnquiriesComponent,
    DelieveriesComponent,
    CheckstatusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

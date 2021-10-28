import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevicesComponentComponent } from './devices-component/devices-component.component';
import { PlansComponentComponent } from './plans-component/plans-component.component';
import { HomeComponent } from './home/home.component';
import { BillComponent } from './bill/bill.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// IMPLEMENT THE COMPONENTS HERE FOR HOME, VIEW BILL, AND PAGENOTFOUND


@NgModule({
  declarations: [
    AppComponent,
    DevicesComponentComponent,
    PlansComponentComponent,
    HomeComponent,
    BillComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

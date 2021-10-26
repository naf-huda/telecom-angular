import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevicesComponentComponent } from './devices-component/devices-component.component';
import { PlansComponentComponent } from './plans-component/plans-component.component';
// IMPLEMENT THE COMPONENTS HERE FOR HOME, VIEW BILL, AND PAGENOTFOUND


@NgModule({
  declarations: [
    AppComponent,
    DevicesComponentComponent,
    PlansComponentComponent,
    // ADD HOME COMPONENT HERE
    // ADD VIEW BILL COMPONENT HERE
    // ADD PAGENOTFOUND COMPONENT HERE
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

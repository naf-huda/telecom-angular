import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlansComponentComponent } from './plans-component/plans-component.component';
import { DevicesComponentComponent } from './devices-component/devices-component.component';
import { HomeComponent } from './home/home.component';
import { BillComponent } from './bill/bill.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path : 'plans-component', component : PlansComponentComponent },
  { path : 'devices-component', component : DevicesComponentComponent },
  { path : 'home', component : HomeComponent },
  { path : 'bill', component : BillComponent },
  { path : 'page-not-found', component : PageNotFoundComponent },
  { path : '', redirectTo: '/home', pathMatch: 'full' },
  { path : '**', redirectTo: '/page-not-found' },
  // If we want to implement a drop down menu or something ->
      //{ path: ‘dropMenu‘, component: dropMenuComp, 
            //children: [ … more paths including plans, devices, and view bill… ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

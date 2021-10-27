import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlansComponentComponent } from './plans-component/plans-component.component';
import { DevicesComponentComponent } from './devices-component/devices-component.component';

const routes: Routes = [
  { path : 'plans-component', component : PlansComponentComponent },
  { path : 'devices-component', component : DevicesComponentComponent },
  // NEED PATH FOR HOME 
  // NEED PATH FOR VIEW BILL
  //{ path: '', redirectTo: '/home-component', pathMatch: 'full' },
  //{ path: '**', redirectTo: 'PAGENOTFOUND' },
  // If we want to implement a drop down menu or something ->
      //{ path: ‘dropMenu‘, component: dropMenuComp, 
            //children: [ … more paths including plans, devices, and view bill… ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

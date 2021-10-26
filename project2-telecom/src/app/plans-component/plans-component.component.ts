import { Component, OnInit } from '@angular/core';
import { Plans } from '../plans';
import { PlansServiceService } from '../plans-service.service';

@Component({
  selector: 'app-plans-component',
  templateUrl: './plans-component.component.html',
  styleUrls: ['./plans-component.component.css']
})
export class PlansComponentComponent implements OnInit {

  //plansList: Plans[]; // NEED TO IMPLEMENT 
  // WILL BE REPLACED WITH THE DATA FROM SPRING
  plan: Plans = { 
    id : 1,
    name : 'Plan 1',
    planType : 1,
    numDevices : 1
  }

  constructor() { }   //private planService: PlansServiceService

  ngOnInit(): void {
    /*this.planService.getAllPlans().subscribe(result => {
      // result will contain our returned array
      this.plansList = result;
    });*/
  }

}

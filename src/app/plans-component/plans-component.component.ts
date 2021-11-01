import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-plans-component',
  templateUrl: './plans-component.component.html',
  styleUrls: ['./plans-component.component.css']
})
export class PlansComponentComponent implements OnInit {

  //plansList: Plans[]; // NEED TO IMPLEMENT 
  // WILL BE REPLACED WITH THE DATA FROM SPRING


  constructor() { }   //private planService: PlansServiceService

  ngOnInit(): void {
    /*this.planService.getAllPlans().subscribe(result => {
      // result will contain our returned array
      this.plansList = result;
    });*/
  }

}

import { Component, OnInit } from '@angular/core';
import { Bill } from '../models/bill';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  // WILL BE REPLACED BY DATA FROM SPRING
  bill : Bill = {
    phoneNumber: 10,
    planNumber: 1000,
    planCost : 100
  }
  bill2 : Bill = {
    phoneNumber: 10,
    planNumber: 1000,
    planCost : 100
  }
  bill3 : Bill = {
    phoneNumber: 10,
    planNumber: 1000,
    planCost : 100
  }
  bill4 : Bill = {
    phoneNumber: 10,
    planNumber: 1000,
    planCost : 100
  }

  //totalCost = planCost
  
  constructor() { }

  ngOnInit(): void {
  }

}

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

    cost : 100

  }
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { Bill } from '../models/bill';
import { Devices } from '../models/devices';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  constructor(private service: DeviceService) { }
  deviceList: Devices[] = []; 
  totalCost: number = 0;
  ngOnInit(): void {
    this.service.findAll().subscribe((data) => {
      this.deviceList = data;
      console.log(this.deviceList);
      this.deviceList.forEach( (device) => {
        console.log(device);
        this.totalCost += device.planCost;
      });
    });
  }

}

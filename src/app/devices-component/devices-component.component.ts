import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { Devices } from '../devices';

@Component({
  selector: 'app-devices-component',
  templateUrl: './devices-component.component.html',
  styleUrls: ['./devices-component.component.css']
})
export class DevicesComponentComponent implements OnInit {

  // WILL BE REPLACED WITH DATA FROM SPRING 
  device: Devices = {
    deviceId : 1,
    deviceNumber : '1',
    planId : 1,
    planNumber : 1,
    planCost: 75
  }

    //devicesList: Devices[]; // NEED TO IMPLEMENT 

  constructor(private service: DeviceService) { }   

  deviceList: Devices[] = []; 
  ngOnInit(): void {
    this.service.findAll().subscribe((data) => {
      this.deviceList = data;
      console.log(this.deviceList);
    });
  }
    /*this.deviceService.getAllPlans().subscribe(result => {
      // result will contain our returned array
      this.devicesList = result;
    });*/
}

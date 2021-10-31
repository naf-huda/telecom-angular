import { Component, OnInit } from '@angular/core';
import { Devices } from '../devices';
import { DevicesServiceService } from '../devices-service.service';

@Component({
  selector: 'app-devices-component',
  templateUrl: './devices-component.component.html',
  styleUrls: ['./devices-component.component.css']
})
export class DevicesComponentComponent implements OnInit {

  // WILL BE REPLACED WITH DATA FROM SPRING 
  device: Devices = {
    id : 1,
    phoneNum : 1,
   
  }

    //devicesList: Devices[]; // NEED TO IMPLEMENT 

  constructor() { }   //private deviceService: DevicesServiceService

  ngOnInit(): void {
    /*this.deviceService.getAllPlans().subscribe(result => {
      // result will contain our returned array
      this.devicesList = result;
    });*/
  }

}

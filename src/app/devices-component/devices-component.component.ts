import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { Devices } from '../devices';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

    closeResult: string = '';

  constructor(private service: DeviceService, private modalService: NgbModal) { }   

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

    open(EditDevice:any) {
      this.modalService.open(EditDevice, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }
}

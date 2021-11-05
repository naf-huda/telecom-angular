import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DeviceService } from '../device.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Devices } from '../models/devices';
import { UpdatedDevice } from '../models/updated-device';
import { DeleteDevice } from '../models/deleteDevice';

@Component({
  selector: 'app-devices-component',
  templateUrl: './devices-component.component.html',
  styleUrls: ['./devices-component.component.css']
})

export class DevicesComponentComponent implements OnInit {

  @ViewChild('change') deviceNumber:string=''

  closeResult: string = '';

  constructor(private service: DeviceService, private modalService: NgbModal) { }

  deviceList: Devices[] = []; 
  ngOnInit(): void {
    this.service.findAll().subscribe((data) => {
      this.deviceList = data;
      console.log(this.deviceList);
    });
  }
  
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

    device: Devices = new Devices();

    deletedDevice: DeleteDevice = {
      planId: this.device.planId
    }

    // delete()
    delete(planId: number): void {
      this.deletedDevice.planId = planId
      console.log(planId);
      this.service.deleteDevice(this.deletedDevice).subscribe(result => {
        console.log(result);
      })
      this.modalService.dismissAll("Deleted Plan!");
    }

    updatedDevice: UpdatedDevice = {
      deviceId: this.device.deviceId,
      deviceNumber: this.device.deviceNumber
    }
   
    update(deviceId: number, deviceNumber: string): void{ //add arguments to update(deviceId: number, deviceNumber: string)
      this.updatedDevice.deviceId = deviceId
      this.updatedDevice.deviceNumber = deviceNumber
      this.service.updatePhoneNumber(this.updatedDevice).subscribe(result => {
        console.log(result);
      });
      this.modalService.dismissAll("Updated!"); // closes the form after submitting, and updates the table 
    }

    rnd: string | undefined = '';
    
    Random(deviceId: number) {
      // first 3 digits 
      const base = 3470000000;
      // compute phone number
      const randomNum = Math.floor(Math.random() * 10000000) + base;
      // convert to string
      this.rnd = randomNum.toString();
      // Add hyphens 
      //this.rnd = this.rnd.substring(0,3) + '-' + this.rnd.substring(3,6) + '-' + this.rnd.substring(6);
      //return this.rnd
      let myContainer = document.getElementById('phoneNumber') as HTMLInputElement;   // Add to the input field
      myContainer.value = this.rnd;

      this.update(deviceId, this.rnd)
    }
}

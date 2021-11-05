import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { servicesVersion } from 'typescript';
import { DeviceService } from '../device.service';
import { Devices } from '../models/devices';
import { planId } from '../models/global-variables';
import { NewDevice } from '../models/new-device';

@Component({
  selector: 'app-plans-component',
  templateUrl: './plans-component.component.html',
  styleUrls: ['./plans-component.component.css']
})
export class PlansComponentComponent implements OnInit {

  //plansList: Plans[]; // NEED TO IMPLEMENT 
  // WILL BE REPLACED WITH THE DATA FROM SPRING

  closeResult: String = '';
  modal: any;


  constructor(private modalService: NgbModal, private service: DeviceService) { }   //private planService: PlansServiceService
  planId: number[] = [];
  deviceList: Devices[] = []; 
  index:number = 0;
  ngOnInit(): void {
    this.service.findAll().subscribe(data => {
      this.deviceList = data;
      console.log(this.deviceList);
      // retrieve all planIds from deviceList
      this.deviceList.forEach(device => {
        console.log(this.planId);
        this.planId[this.index] = device.planId;
        this.index++;
      });
    });
  }

  open(AddSingle:any) {
    this.modalService.open(AddSingle, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openC(AddCouple:any) {
    this.modalService.open(AddCouple, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openF(AddFamily:any) {
    this.modalService.open(AddFamily, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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

  postSingle(f: NgForm) {
    
    //this.httpClient.post(url, f.value)
      //.subscribe((result) => {
        this.ngOnInit(); //reload the table
     // });
    this.modalService.dismissAll(); //dismiss the modal
  }

  newDevice1: NewDevice = {
    deviceNumber: '',
    planId: 0,
    planNumber: 0,
    planCost: 0
  }

  newDevice2: NewDevice = {
    deviceNumber: '',
    planId: 0,
    planNumber: 0,
    planCost: 0
  }

  newDevice3: NewDevice = {
    deviceNumber: '',
    planId: 0,
    planNumber: 0,
    planCost: 0
  }

  saveFormSingleDevice(f: NgForm) {
    // create new Device to pass from f field values
      this.newDevice1.deviceNumber = f.controls['deviceNumber'].value;
      this.newDevice1.planId = this.index;
      this.newDevice1.planNumber = f.controls['planNumber'].value;
      this.newDevice1.planCost = f.controls['planCost'].value;

      console.log(this.newDevice1);

    // make post request
      this.service.saveSingleDevice(this.newDevice1).subscribe(result => {
          console.log(result);
      });
     
      this.index++;

      this.modalService.dismissAll("Saved Plan");
    }

    newDevices: NewDevice[] = [];

    saveFormTwoDevices(f: NgForm) {
      // create new Device to pass from f field values
        this.newDevice1.deviceNumber = f.controls['deviceNumber1'].value;
        this.newDevice1.planId = this.index;
        this.newDevice1.planNumber = f.controls['planNumber'].value;
        this.newDevice1.planCost = f.controls['planCost'].value;
        // push first device
        this.newDevices.push(this.newDevice1);

        // update deviceNumber to reflect second device's number
        // this.newDevice.deviceNumber = f.controls['deviceNumber2'].value;

         // create second Device to pass from f field values
         this.newDevice2.deviceNumber = f.controls['deviceNumber2'].value;
         this.newDevice2.planId = this.index;
         this.newDevice2.planNumber = f.controls['planNumber'].value;
         this.newDevice2.planCost = f.controls['planCost'].value;


        // push second device 
        this.newDevices.push(this.newDevice2);

        console.log(this.newDevices);

        this.service.saveTwoDevices(this.newDevices).subscribe(result => {
          console.log(result);
        })

        this.index++;

        this.modalService.dismissAll("Saved Plan");

      }

      saveFormThreeDevices(f: NgForm) {
        // create new Device to pass from f field values
          this.newDevice1.deviceNumber = f.controls['deviceNumber1'].value;
          this.newDevice1.planId = this.index;
          this.newDevice1.planNumber = f.controls['planNumber'].value;
          this.newDevice1.planCost = f.controls['planCost'].value;
          // push first device
          this.newDevices.push(this.newDevice1);
  
          // update deviceNumber to reflect second device's number
          // this.newDevice.deviceNumber = f.controls['deviceNumber2'].value;
  
           // create second Device to pass from f field values
           this.newDevice2.deviceNumber = f.controls['deviceNumber2'].value;
           this.newDevice2.planId = this.index;
           this.newDevice2.planNumber = f.controls['planNumber'].value;
           this.newDevice2.planCost = f.controls['planCost'].value;
  
  
          // push second device 
          this.newDevices.push(this.newDevice2);

           // create second Device to pass from f field values
           this.newDevice2.deviceNumber = f.controls['deviceNumber3'].value;
           this.newDevice2.planId = this.index;
           this.newDevice2.planNumber = f.controls['planNumber'].value;
           this.newDevice2.planCost = f.controls['planCost'].value;
  
  
          // push third device 
          this.newDevices.push(this.newDevice2);
  
          console.log(this.newDevices);
  
          this.service.saveThreeDevices(this.newDevices).subscribe(result => {
            console.log(result);
          })
  
          this.index++;
  
          this.modalService.dismissAll("Saved Plan");
  
        }
  

    onSubmit(f: NgForm) {}

}

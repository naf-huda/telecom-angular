import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeviceService } from '../device.service';
import { Devices } from '../models/devices';

@Component({
  selector: 'app-plans-component',
  templateUrl: './plans-component.component.html',
  styleUrls: ['./plans-component.component.css']
})
export class PlansComponentComponent implements OnInit {

  //plansList: Plans[]; // NEED TO IMPLEMENT 
  // WILL BE REPLACED WITH THE DATA FROM SPRING

  closeResult: String = '';


  constructor(private modalService: NgbModal, private service: DeviceService) { }   //private planService: PlansServiceService

  deviceList: Devices[] = []; 
  ngOnInit(): void {
    this.service.findAll().subscribe(result => {
      this.deviceList = result;
    });
    /*this.planService.getAllPlans().subscribe(result => {
      // result will contain our returned array
      this.plansList = result;
    });*/
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

  onSubmit(f: NgForm) {
    const url = '';
    //this.httpClient.post(url, f.value)
      //.subscribe((result) => {
        this.ngOnInit(); //reload the table
     // });
    this.modalService.dismissAll(); //dismiss the modal
  }

  

}

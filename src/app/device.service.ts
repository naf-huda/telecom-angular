import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteDevice } from './models/deleteDevice';

import { Devices } from './models/devices';
import { NewDevice } from './models/new-device';
import { UpdatedDevice } from './models/updated-device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  url = 'http://localhost:8080/telecom/v1';

  postUrlSingleDevice = 'http://localhost:8080/telecom/v1/device'

  postUrlMultipleDevices = 'http://localhost:8080/telecom/v1/devices'

  putUrl = 'http://localhost:8080/telecom/v1/device'



  constructor(private httpClient : HttpClient) { }

  findAll(): Observable<Devices[]> {
    return this.httpClient.get<Devices[]>(this.url);
  } 

  
  updatePhoneNumber(device: UpdatedDevice): Observable<any> {
    this.putUrl = this.putUrl;
    return this.httpClient.put(this.putUrl,device);
  }

  saveSingleDevice(device: NewDevice): Observable<any> {
    return this.httpClient.post(this.postUrlSingleDevice, device);
  }

  saveTwoDevices(devices: NewDevice[]): Observable<any> {
    return this.httpClient.post(this.postUrlMultipleDevices, devices);
  }

  deleteDevice(device: DeleteDevice): Observable<any> {
    return this.httpClient.delete(this.postUrlMultipleDevices + '/' + device.planId);
  }

  saveThreeDevices(devices: NewDevice[]): Observable<any> {
    return this.httpClient.post(this.postUrlMultipleDevices, devices);
  }

}

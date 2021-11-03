import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Devices } from './models/devices';
import { UpdatedDevice } from './models/updated-device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  url = 'http://localhost:8080/telecom/v1';

  putUrl = 'http://localhost:8080/telecom/v1/device'

  constructor(private httpClient : HttpClient) { }

  findAll(): Observable<Devices[]> {
    return this.httpClient.get<Devices[]>(this.url);
  } 

  //+ '/' + device.deviceId + '/' + device.deviceNumber
  updatePhoneNumber(device: UpdatedDevice): Observable<any> {
    this.putUrl = this.putUrl;
    return this.httpClient.put(this.putUrl,device);
  }

  

  //save(device: Devices): Observable<Devices>

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Devices } from './models/devices';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  url = 'http://localhost:8080/telecom/v1';

  constructor(private httpClient : HttpClient) { }

  findAll(): Observable<Devices[]> {
    return this.httpClient.get<Devices[]>(this.url);
  } 

  //save(device: Devices): Observable<Devices>

}

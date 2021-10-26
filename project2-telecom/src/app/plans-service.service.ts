import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plans } from './models/plans';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlansServiceService {

  url=''; // NEED TO IMPLEMENT

  constructor(private httpClient : HttpClient) { }

  /* getAllPlans(): Observable<any> {
    // NEED TO IMPLEMENT 
  }

  saveDevices(plan: Plans): Observable <any> {
    // NEED TO IMPLEMENT
  } */
}


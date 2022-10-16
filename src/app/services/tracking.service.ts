import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tracking } from '../models/tracking.model';
import {Observable}  from 'rxjs';
import { TrackingPages } from '../models/trackingPages.model';


@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  uri:String="http://localhost:8080/api/tracking";

  constructor(private http:HttpClient) { }


  allTracking(page:Number, size:Number):Observable<TrackingPages>{

    return this.http.get<TrackingPages>(this.uri+"/all/"+page+"/"+size);

  }

  
  trackingById(id:String):Observable<Tracking>{

    return this.http.get<Tracking>(this.uri+"/id/"+id);

  }

  trackingByCustomerCin(id:String):Observable<Tracking>{

    return this.http.get<Tracking>(this.uri+"/id/"+id);

  }
 
  trackingByObservation(keyword:string , page:number , size:number):Observable<TrackingPages>{

    return this.http.get<TrackingPages>(this.uri+"/observation/"+keyword+"/"+page+"/"+size);
  }




}

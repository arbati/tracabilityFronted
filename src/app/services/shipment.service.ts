import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable,tap,catchError, of} from 'rxjs'
import { Shipment } from '../models/shipment.model';


@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  uri:string="http://localhost:8080/api/shipment/codebarre";

  constructor(private http:HttpClient) { }


  getShipmentByBarCode(barCode:string):Observable<Shipment[]>{

    console.log(barCode);

   return this.http.get<Shipment[]>(this.uri+"/"+barCode).pipe(
    tap((response)=>console.log(response)),
    catchError( (err) => {
         console.log(err);
         return of([]);
    })
   );


  }





}

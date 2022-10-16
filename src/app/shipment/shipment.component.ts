import { Component, OnInit } from '@angular/core';
import { Shipment } from '../models/shipment.model';
import { ShipmentService } from '../services/shipment.service';
import { Subject, Observable, debounceTime, distinctUntilChanged,switchMap } from 'rxjs';


@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})
export class ShipmentComponent implements OnInit {
     
  shipments$!:Observable<Shipment[]>;
  searchTerms = new Subject<string>();
  displayResult:boolean=false;

  constructor(private service:ShipmentService) { }

  // https://www.youtube.com/watch?v=DTIYVffhJuU&t=27278s  time 7:57:54
  ngOnInit(): void {

    this.shipments$= this.searchTerms.pipe(
      // waiting 300 ms before make searching {....a.ab....abz.ab......abc...}
      debounceTime(300),
      // avoid deplucate {....ab.....ab......abc...}
      distinctUntilChanged(),
      // call service just for the last keyword {....ab.........abc...}
      switchMap((term)=> this.service.getShipmentByBarCode(term))
      //switchMap/mergeMap/concatMap
    );

     



  }


 searching(keyword:string){
  this.searchTerms.next(keyword);

  if(keyword.length>0){
     this.displayResult=true;
  }else{
    this.displayResult=false;
  }



 }
  






}

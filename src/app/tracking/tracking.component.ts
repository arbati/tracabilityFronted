import { Component, OnInit } from '@angular/core';
import { Tracking } from '../models/tracking.model';
import { TrackingService } from '../services/tracking.service';
import { MatDialog } from '@angular/material/dialog';
import { ShipmentDialogComponent } from '../dialog/shipment-dialog/shipment-dialog.component';
import { AgencyDialogComponent } from '../dialog/agency-dialog/agency-dialog.component';
import {MatPaginator} from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  trakings!:Tracking[];
  displayedColumns: string[] = ['id', 'receptionDate', 'deliveryDate', 'observation','codebarre','agency'];
  last!: boolean;
  first!: boolean;
  number: number=0;
  size: number=10;
  totalPages!: number;
  totalElements!: number;
  pageSizeOptions: Array<number>=[5,10,20,30]
  keyWord!:string;



  constructor(private tarckingService:TrackingService, private dialog:MatDialog,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.checkKeyword();
   
  }


  inputKeyword(keyWord:string){
    this.keyWord=keyWord;
    this.checkKeyword();
  }


   checkKeyword(){
    console.log(this.keyWord);

    if (this.keyWord == undefined || this.keyWord=="") {
      this.allTracking();
    } else {
      this.searchingByObservation();
    }

   }



  allTracking(){

   this.tarckingService.allTracking(this.number,this.size).subscribe({
    next: data=>{
      this.trakings=data.content;
      this.number=data.number;
      this.size=data.size;
      this.totalElements=data.totalElements;
    },
    error:error=>{
      //console.error(error);
      //this.snack.open(error,"Error");
    }
   });

  }



  searchingByObservation(){
    
    this.tarckingService.trackingByObservation(this.keyWord,this.number,this.size).subscribe({
      next:data=>{

        this.trakings=data.content;
        this.number=data.number;
        this.size=data.size;
        this.totalElements=data.totalElements;

      },
      error:error=>{
        //console.error(error);
        //this.snack.open(error,"Error");
      }
    });

  }

  pageChangeData(event:any):void{

   //console.log(event);
   this.size=event.pageSize;
   this.number=event.pageIndex;
   this.checkKeyword();
  }

  
  showDialog(trackingId:String, dialogName:String){

    this.tarckingService.trackingById(trackingId).subscribe({
      next: data=>{
      

        if(dialogName=="SHIPMENT"){
          this.dialog.open(ShipmentDialogComponent,{data:data.shipment});
        }

        if(dialogName=="AGENCY"){
          this.dialog.open(AgencyDialogComponent,{data:data.agency});
        }

        console.log(data);
        

      },
      error: er=>{

      console.error(er)

      }
    });


  }



}

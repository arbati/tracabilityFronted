import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Shipment } from 'src/app/models/shipment.model';

@Component({
  selector: 'app-shipment-dialog',
  templateUrl: './shipment-dialog.component.html',
  styleUrls: ['./shipment-dialog.component.css']
})
export class ShipmentDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:Shipment) { }

  ngOnInit(): void {
  }

}

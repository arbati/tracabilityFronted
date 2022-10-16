import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DATE_LOCALE_FACTORY } from '@angular/material/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Agency } from 'src/app/models/agency.model';

@Component({
  selector: 'app-agency-dialog',
  templateUrl: './agency-dialog.component.html',
  styleUrls: ['./agency-dialog.component.css']
})
export class AgencyDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:Agency) { }

  ngOnInit(): void {
  }

}

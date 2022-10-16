import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { TrackingComponent } from './tracking/tracking.component';

const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:"tracking",component:TrackingComponent},
  {path:"shipment", component: ShipmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

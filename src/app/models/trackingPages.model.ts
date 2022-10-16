import { Agency } from "./agency.model"
import { ShipmentType } from "./shipment-type.model"
import { Shipment } from "./shipment.model"
import { Tracking } from "./tracking.model"

export class TrackingPages {
   'content': Array<Tracking>
   'last': boolean
   'first': boolean
   'number': number
   'size': number
   'totalPages': number
   'totalElements': number
}

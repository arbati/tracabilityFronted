import { Agency } from "./agency.model"
import { ShipmentType } from "./shipment-type.model"
import { Shipment } from "./shipment.model"

export class Tracking {
   '_id': String
   'receptionDate': Date
   'deliveryDate': Date
   'observation': String
   'shipment': Shipment 
   'agency': Agency
}

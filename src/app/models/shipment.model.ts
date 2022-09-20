import { Customer } from "./customer.model"
import { ShipmentType } from "./shipment-type.model"

export class Shipment {
    'codebarre': String
    'fragility': boolean
    'height': number
    'volume': number
    'detail': String
    'destinationAddress': String
    'destinationZipCode': String
    'customer': Customer
    'shipmentType': ShipmentType
}

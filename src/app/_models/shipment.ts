
export class Shipment {
    shipmentId!: string;
    shipmentNumber!: string;
    airport!: string;
    flightNumber!: string;
    flightDate!: string;
    status: boolean = false;
    isDeleting: boolean = false;
}
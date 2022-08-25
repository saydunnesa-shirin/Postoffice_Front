import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { ShipmentService } from '@app/_services';
import { Shipment } from '@app/_models';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    shipments!: Shipment[];

    constructor(private shipmentService: ShipmentService) {}

    ngOnInit() {
        this.shipmentService.getAll()
            .pipe(first())
            .subscribe(shipments => this.shipments = shipments);
    }

    deleteUser(id: string) {
        const shipment = this.shipments.find(x => x.shipmentId === id);
        if (!shipment) return;
        shipment.isDeleting = true;
        this.shipmentService.delete(id)
            .pipe(first())
            .subscribe(() => this.shipments = this.shipments.filter(x => x.shipmentId !== id));
    }
}
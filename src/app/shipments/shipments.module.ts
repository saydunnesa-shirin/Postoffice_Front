import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ShipmentsRoutingModule } from './shipments-routing.module';
import { LayoutComponent } from './layout.component';
import { ListComponent } from './list.component';
// import { AddEditComponent } from './add-edit.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ShipmentsRoutingModule
    ],
    declarations: [
        LayoutComponent,
        ListComponent
    ]
})
export class ShipmentsModule { }
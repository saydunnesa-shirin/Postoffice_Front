import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home';

const shipmentsModule = () => import('./shipments/shipments.module').then(x => x.ShipmentsModule);

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shipments', loadChildren: shipmentsModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

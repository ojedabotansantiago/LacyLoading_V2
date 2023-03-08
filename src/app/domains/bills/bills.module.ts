import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillsComponent } from './bills.component';
import { BillsDetailComponent } from './bills-detail/bills-detail.component';
import { BillsDetailModule } from './bills-detail/bills-detail.module';
import { BillsRoutingModule } from './bills-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    BillsRoutingModule
  ]
})
export class BillsModule { }

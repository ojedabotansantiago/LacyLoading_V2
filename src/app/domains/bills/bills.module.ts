import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillsComponent } from './bills.component';
import { BillsDetailComponent } from './bills-detail/bills-detail.component';
import { BillsDetailModule } from './bills-detail/bills-detail.module';



@NgModule({
  declarations: [
    BillsComponent,
  ],
  imports: [
    CommonModule,
    BillsDetailModule
  ]
})
export class BillsModule { }

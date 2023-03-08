import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillsDetailComponent } from './bills-detail.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [BillsDetailComponent],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class BillsDetailModule { }

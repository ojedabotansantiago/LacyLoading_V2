import { NgModule } from '@angular/core';
import { BillsRoutingModule } from './bills-routing.module';
import { BillsDetailComponent } from './bills-detail/bills-detail.component';
import { BillsComponent } from './bills.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    BillsComponent,
  ],
  imports: [
    TranslateModule,
    BillsRoutingModule,

  ]
})
export class BillsModule { }

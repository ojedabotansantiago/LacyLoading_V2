import { NgModule } from '@angular/core';
import { BillsRoutingModule } from './bills-routing.module';
import { BillsDetailComponent }
  from './bills-componets/bills-detail/bills-detail.component';
import { BillsComponent } from './bills.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    BillsComponent,
    BillsDetailComponent
  ],
  imports: [
    TranslateModule,
    BillsRoutingModule,
  ]
})
export class BillsModule { }

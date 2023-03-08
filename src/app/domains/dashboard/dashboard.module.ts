import { NgModule } from '@angular/core';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [DashboardComponent],
  imports: [DashBoardRoutingModule, TranslateModule]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import {TranslateModule} from '@ngx-translate/core';



@NgModule({
  declarations: [],
  imports: [DashBoardRoutingModule, TranslateModule]
})
export class DashboardModule { }

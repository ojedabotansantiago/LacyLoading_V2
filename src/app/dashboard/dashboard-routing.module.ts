import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes =[
  {
    path:'',
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    RouterModule.forChild(routes),
    TranslateModule
  ]
})
export class DashBoardRoutingModule { }

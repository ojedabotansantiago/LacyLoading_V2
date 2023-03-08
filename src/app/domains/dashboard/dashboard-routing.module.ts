import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardComponent } from './dashboard.component';

const routes: Routes =[
  {
    path:'',
    component: DashboardComponent
  },
  {
    path: 'dasBoard/bills',
    loadChildren: () => import('../bills/bills.module').then(m => {m.BillsModule})
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

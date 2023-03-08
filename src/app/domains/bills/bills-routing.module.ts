import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BillsComponent } from './bills.component';

const routes: Routes = [
  {
    path: '',
    component: BillsComponent,
    children: [
      {
        path: 'detail',
        loadChildren: () => import('./bills-detail/bills-detail.module').then(m => m.BillsDetailModule)
      }
    ]
  },
  {
    path: 'dashBoard', 
    loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule),
  },
];

@NgModule({
  declarations: [BillsComponent],
  imports: [
    RouterModule.forChild(routes),
    TranslateModule
  ]
})
export class BillsRoutingModule { }

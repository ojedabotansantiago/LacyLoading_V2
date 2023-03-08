import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BillsComponent } from './bills.component';
import { BillsDetailComponent } from './bills-detail/bills-detail.component';
import { BillsDetailModule } from './bills-detail/bills-detail.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: BillsComponent
      },
      {
        path: 'detail',
        component: BillsDetailComponent
      },
      { path: '**', redirectTo: '' }
    ]
  }
];
//        loadChildren: () => import('./bills-detail/bills-detail.module').then(m => m.BillsDetailModule)


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class BillsRoutingModule { }


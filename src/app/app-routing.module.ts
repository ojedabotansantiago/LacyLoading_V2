import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashBoard', 
    loadChildren: () => import('./domains/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'bills', 
    loadChildren: () => import('./domains/bills/bills.module').then(m => m.BillsModule),
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

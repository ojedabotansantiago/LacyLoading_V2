import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseDetailComponent } from './cases-components/case-detail/case-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'detail',
        component: CaseDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasesRoutingModule { }

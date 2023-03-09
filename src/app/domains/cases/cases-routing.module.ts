import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseDetailComponent } from './cases-components/case-detail/case-detail.component';
import { CasesComponent } from './cases.component';

const routes: Routes = [
  {
    path: '',
    children: [

      {
        path: '',
        component: CasesComponent
      }, {
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

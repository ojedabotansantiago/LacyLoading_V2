import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesRoutingModule } from './cases-routing.module';
import { CasesComponent } from './cases.component';
import { TranslateModule } from '@ngx-translate/core';
import { CaseDetailComponent } from './cases-components/case-detail/case-detail.component';


@NgModule({
  declarations: [
    CasesComponent,
    CaseDetailComponent
  ],
  imports: [
    TranslateModule,
    CasesRoutingModule
  ]
})
export class CasesModule { }

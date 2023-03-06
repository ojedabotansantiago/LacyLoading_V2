import { NgModule } from '@angular/core';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';

const materialComponents = [
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTabsModule
];

@NgModule({
  imports: [
    ...materialComponents
  ],
  exports: [
    materialComponents
  ]
})
export class MaterialModule { }

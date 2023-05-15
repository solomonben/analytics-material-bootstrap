import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticComponent } from './analytic.component';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticService } from './analytic.service';

const routes: Routes = [
  {
      path     : '',
      component: AnalyticComponent
  }
];

@NgModule({
  declarations: [AnalyticComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers   : [
    AnalyticService
]
})
export class AnalyticModule { }

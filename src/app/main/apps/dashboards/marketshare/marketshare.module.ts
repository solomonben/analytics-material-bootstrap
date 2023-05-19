import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MarketshareComponent } from './marketshare.component';


const routes: Routes = [
  { path: '', component: MarketshareComponent }
];

@NgModule({
  declarations: [MarketshareComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MarketshareModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CompetitorsComponent } from './competitors.component';
import { CompetitorsDashboardService } from './competitors.service';
import { FuseSidebarModule, FuseWidgetModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';


const routes: Routes = [
  { path: '', component: CompetitorsComponent,
  resolve  : {
    data: CompetitorsDashboardService
} }
];

@NgModule({
  declarations: [CompetitorsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,

    NgxChartsModule,

    FuseSharedModule,
    FuseSidebarModule,
    FuseWidgetModule

  ],
  providers:[CompetitorsDashboardService]
})
export class CompetitorsModule { }

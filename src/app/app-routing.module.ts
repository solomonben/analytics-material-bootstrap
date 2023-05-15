import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helper/auth.guard';
const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const analyticsModule = () => import('./main/apps/dashboards/analytics/analytics.module').then(x => x.AnalyticsDashboardModule);
const projectModule = () => import('./main/apps/dashboards/project/project.module').then(x => x.ProjectDashboardModule);
const appsModule = () => import('./main/apps/apps.module').then(x => x.AppsModule);
const appRoutes: Routes = [
  {
      path        : 'apps',
      loadChildren: './main/apps/apps.module#AppsModule'
  },
  {
      path        : 'pages',
      loadChildren: './main/pages/pages.module#PagesModule'
  },
  {
      path        : 'ui',
      loadChildren: './main/ui/ui.module#UIModule'
  },
  {
      path        : 'documentation',
      loadChildren: './main/documentation/documentation.module#DocumentationModule'
  },
  {
      path : '**',redirectTo: 'apps/dashboards/home'
  },
  { path: 'account', loadChildren: accountModule },
  
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

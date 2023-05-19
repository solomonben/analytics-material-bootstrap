import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { AuthGuard } from 'app/helper/auth.guard';
import { RegisterModule } from '../pages/authentication/register/register.module';
const loginModule = () => import('./login/login.module').then(x => x.LoginModule);
const registerModule = () => import('./register/register.module').then(x => x.RegisterModule);
const analyticModule = () => import('./dashboards/analytic/analytic.module').then(x => x.AnalyticModule);
const routes = [
    { path: 'login', loadChildren: loginModule },
    { path: 'register', loadChildren: registerModule },
    { path: 'dashboards/analytic', loadChildren: analyticModule, canActivate: [AuthGuard] },
    {
        path: 'dashboards/analytics', canActivate: [AuthGuard],
        loadChildren: './dashboards/analytics/analytics.module#AnalyticsDashboardModule'
    },
    {
        path: 'dashboards/home', canActivate: [AuthGuard],
        loadChildren: './dashboards/project/project.module#ProjectDashboardModule'
    },
    {
        path: 'mail',
        loadChildren: './mail/mail.module#MailModule'
    },
    {
        path: 'mail-ngrx',
        loadChildren: './mail-ngrx/mail.module#MailNgrxModule'
    },
    {
        path: 'chat',
        loadChildren: './chat/chat.module#ChatModule'
    },
    {
        path: 'calendar',
        loadChildren: './calendar/calendar.module#CalendarModule'
    },
    {
        path: 'e-commerce',
        loadChildren: './e-commerce/e-commerce.module#EcommerceModule'
    },
    {
        path: 'academy',
        loadChildren: './academy/academy.module#AcademyModule'
    },
    {
        path: 'todo',
        loadChildren: './todo/todo.module#TodoModule'
    },
    {
        path: 'file-manager',
        loadChildren: './file-manager/file-manager.module#FileManagerModule'
    },
    {
        path: 'contacts',
        loadChildren: './contacts/contacts.module#ContactsModule'
    },
    {
        path: 'scrumboard',
        loadChildren: './scrumboard/scrumboard.module#ScrumboardModule'
    },
    { path: 'dashboards/marketshare', canActivate: [AuthGuard], loadChildren: () => import('./dashboards/marketshare/marketshare.module').then(m => m.MarketshareModule) },
    { path: 'dashboards/competitors', loadChildren: () => import('./dashboards/competitors/competitors.module').then(m => m.CompetitorsModule) },
    { path: 'competitors', loadChildren: () => import('./dashboards/competitors/competitors.module').then(m => m.CompetitorsModule) }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class AppsModule {
}


import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

import { FuseSharedModule } from '@fuse/shared.module';

import { QuickPanelComponent } from 'app/layout/components/quick-panel/quick-panel.component';

@NgModule({
    declarations: [
        QuickPanelComponent
    ],
    imports     : [
        MatTabsModule,
        MatDividerModule,
        MatListModule,
        MatSlideToggleModule,
        MatIconModule,

        FuseSharedModule,
    ],
    exports: [
        QuickPanelComponent
    ]
})
export class QuickPanelModule
{
}

import { CovalentExpansionPanelModule } from '@covalent/core';
import { LocalizeRouterModule } from 'localize-router';
import { MdProgressBarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { WhoComponent } from './who.component';
import { SkillComponent } from './skill/skill.component';

@NgModule({
  declarations: [
    SkillComponent,
    WhoComponent
  ],
  imports: [
    CovalentExpansionPanelModule,
    LocalizeRouterModule,
    MdProgressBarModule,
    NgxChartsModule,
    RouterModule,
    SharedModule,
    TranslateModule
  ]
})
export class WhoModule {
}

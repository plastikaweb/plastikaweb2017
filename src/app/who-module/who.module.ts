import { CovalentCoreModule } from '@covalent/core';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { WhoComponent } from './who.component';
import { SkillComponent } from './skill/skill.component';
import { RouterModule } from '@angular/router';
import { LocalizeRouterModule } from 'localize-router';

@NgModule({
  declarations: [
    SkillComponent,
    WhoComponent
  ],
  imports: [
    CovalentCoreModule,
    LocalizeRouterModule,
    NgxChartsModule,
    RouterModule,
    SharedModule,
    TranslateModule
  ]
})
export class WhoModule {
}

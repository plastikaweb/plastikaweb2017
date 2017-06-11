import { NgModule } from '@angular/core';
import { CovalentCoreModule } from '@covalent/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { WhoComponent } from './who.component';
import { SkillComponent } from './skill/skill.component';
import { RouterModule } from '@angular/router';
import { LocalizeRouterModule } from 'localize-router';

@NgModule({
  declarations: [
    WhoComponent,
    SkillComponent
  ],
  imports: [
    CovalentCoreModule,
    LocalizeRouterModule,
    RouterModule,
    TranslateModule,
    NgxChartsModule,
    SharedModule
  ]
})
export class WhoModule {
}

import { NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { CovalentCoreModule } from '@covalent/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LocalizeRouterModule } from 'localize-router';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { firebaseConfig } from '../../config/firebase.config';
import { SharedModule } from '../shared/shared.module';
import { TagsComponent } from './tags/tags.component';
import { WorkComponent } from './work/work.component';
import { WorksComponent } from './works.component';

@NgModule({
  imports: [
    CovalentCoreModule,
    TranslateModule,
    LocalizeRouterModule,
    RouterModule,
    LazyLoadImageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    SharedModule
  ],
  declarations: [
    TagsComponent,
    WorkComponent,
    WorksComponent
  ]
})
export class WorksModule {
}

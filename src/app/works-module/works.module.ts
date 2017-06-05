import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CovalentCoreModule } from '@covalent/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { WorksComponent } from './works.component';
import { WorkComponent } from './work/work.component';
import { ArrayExtractPipe } from '../pipes/array-extract.pipe';
import { firebaseConfig } from '../../config/firebase.config';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SharedModule } from '../shared/shared.module';
import { LocalizeRouterModule } from 'localize-router';

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
    WorksComponent,
    WorkComponent,
    ArrayExtractPipe
  ]
})
export class WorksModule {
}

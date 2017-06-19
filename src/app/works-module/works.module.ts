import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { Angulartics2Module } from 'angulartics2';
import { CommonModule } from '@angular/common';
import { CovalentChipsModule } from '@covalent/core';
import { FormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LocalizeRouterModule } from 'localize-router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FilterPipe } from './filter-pipe/filter.pipe';
import { FilterWorksComponent } from './filter-works/filter-works.component';
import { firebaseConfig } from '../../config/firebase.config';
import { SharedModule } from '../shared/shared.module';
import { TagsComponent } from './tags/tags.component';
import { WorkComponent } from './work/work.component';
import { WorksComponent } from './works.component';

@NgModule({
  imports: [
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    Angulartics2Module.forChild(),
    CommonModule,
    CovalentChipsModule,
    FormsModule,
    LazyLoadImageModule,
    LocalizeRouterModule,
    RouterModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [
    TagsComponent,
    WorkComponent,
    WorksComponent,
    FilterWorksComponent,
    FilterPipe
  ]
})
export class WorksModule {
}

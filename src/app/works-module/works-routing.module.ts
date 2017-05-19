import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkComponent } from './work/work.component';
import { WorksComponent } from './works.component';

const worksRoutes: Routes = [
  { path: '', component: WorksComponent },
  { path: 'detail/:key', component: WorkComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(worksRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class WorksRoutingModule {
}

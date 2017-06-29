import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CookiesComponent } from './cookies-module/cookies.component';
import { ContactComponent } from './contact-module/contact.component';
import { ContactResolver, WhoResolver, WorkResolver, WorksResolver } from './resolvers/resolvers.module';
import { NotFoundComponent } from './not-found-module/not-found.component';
import { WhoComponent } from './who-module/who.component';
import { WorkComponent } from './works-module/work/work.component';
import { WorksComponent } from './works-module/works.component';

export const appRoutes: Routes = [
  { path: 'who', component: WhoComponent, resolve: {
    who: WhoResolver
  } },
  { path: 'works', component: WorksComponent, resolve: {
    works: WorksResolver
  } },
  {
    path: 'works/:slug', component: WorkComponent, resolve: {
    work: WorkResolver
  }
  },
  { path: 'contact', component: ContactComponent, resolve: {
    contact: ContactResolver
  } },
  { path: 'cookies', component: CookiesComponent },
  { path: '', redirectTo: '/who', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

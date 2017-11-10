import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { ContactComponent } from './contact/contact.component';
 
const appRoutes: Routes = [
  { path: 'frontpage', component: FrontPageComponent },
  { path: 'contact',        component: ContactComponent },
  { path: 'contact:id',        component: ContactComponent },
  { path: '',   redirectTo: '/frontpage', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
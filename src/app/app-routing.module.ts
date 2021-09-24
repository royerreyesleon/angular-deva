import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [
  // { path: '',              component: AboutComponent,  pathMatch: 'full'}
  // { path: 'contacto', component: ContactFormModule}
  { path: 'inicio',   component: WelcomeComponent,},
  { path: 'contacto', component: ContactFormComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // imports: [RouterModule.forRoot(routes, {useHash:true, relativeLinkResolution:'legacy'})],
  // providers : [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppRoutingModule { }

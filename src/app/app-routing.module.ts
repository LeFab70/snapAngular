import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSnapFacesComponent } from './all-snap-faces/all-snap-faces.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: 'facesnaps',
    component: AllSnapFacesComponent,
  },
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

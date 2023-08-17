import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSnapFacesComponent } from './all-snap-faces/all-snap-faces.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { CreateFaceSnapComponent } from './create-face-snap/create-face-snap.component';

const routes: Routes = [
  {
    path: 'facesnaps',
    component: AllSnapFacesComponent,
  },
  {
    path: 'createfacesnap',
    component: CreateFaceSnapComponent,
  },
  // {
  //   path: 'facesnaps/:id',
  //   component: SingleFaceSnapComponent,
  // },

  // {
  //   path: '',
  //   component: AllSnapFacesComponent,
  //   children: [

  //       {
  //         path: 'facesnaps',
  //         component: AllSnapFacesComponent,
  //       },
  //       {path: 'createfacesnap',
  //       component: CreateFaceSnapComponent,
  //     },
  //   ],
  // },
  {
    path: 'facesnaps/:name',
    component: SingleFaceSnapComponent,
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

import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { AllSnapFacesComponent } from './all-snap-faces/all-snap-faces.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [AppComponent, FaceSnapComponent, AllSnapFacesComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}

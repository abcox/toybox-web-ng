import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http'
import { ApiModule, Configuration, ConfigurationParameters } from 'toybox-backend-ts-ng';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ContactEffects } from './contact/store/contact.effects';
import { reducers } from './store/reducers';

export function apiConfigFactory (): Configuration {
  const params: ConfigurationParameters = {
    basePath: "http://localhost:3000"
  }
  return new Configuration(params);
}

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ApiModule.forRoot(apiConfigFactory),
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([ContactEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

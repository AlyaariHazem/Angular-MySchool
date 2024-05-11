import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppTranslateModule } from './modules/app-translate.module';
import {  HttpClientModule } from '@angular/common/http';
import { IntercepterService } from './components/sharedComponents/intercepter.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync()
    ,provideRouter(routes,withComponentInputBinding()), provideAnimationsAsync(),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(AppTranslateModule.forRoot()),   
    provideHttpClient(withFetch()),
    {provide:HTTP_INTERCEPTORS,useClass:IntercepterService,multi:true}
  ]
};

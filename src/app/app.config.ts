import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppTranslateModule } from './modules/app-translate.module';
import {  HttpClientModule } from '@angular/common/http';
import { IntercepterService } from './core/services/intercepter.service';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync()
    ,provideRouter(routes,withComponentInputBinding()), provideAnimationsAsync(),
    importProvidersFrom((HttpClientModule)),
    importProvidersFrom(AppTranslateModule.forRoot()),   
    provideHttpClient(withFetch()),
    provideAnimations(), // required animations providers
   // Toastr providers
    provideToastr(
      {
        timeOut: 10000,
        positionClass: 'toast-bottom-left',
      }
    ), 
    
    
    {provide:HTTP_INTERCEPTORS,useClass:IntercepterService,multi:true}
  ]
};

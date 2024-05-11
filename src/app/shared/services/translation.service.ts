import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  //this for inject Translateservice to start to service
  translateService=inject(TranslateService);
  setDefaultLang(lang:string): void{
  this.translateService.setDefaultLang(lang);
  }

  
}

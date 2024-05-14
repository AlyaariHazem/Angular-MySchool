import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { firebaseUrl } from './firebase-url';


@Injectable({
    providedIn: 'root'
  })
export class FirebaseService {

  constructor() { }
http=inject(HttpClient);

getRequest<T>(name:any): Observable<T>{
  return this.http.get<T>(`${firebaseUrl}${name}.json`);
}

postRequest(Url:string,body:any,options:any):Observable<ArrayBuffer>{
    return this.http.post(Url,body,options);
  }
  
}
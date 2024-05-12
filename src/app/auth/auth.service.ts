import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { FirebaseService } from '../core/services/firebase.service';
import { firebaseUrl, signIn, signUp } from '../core/services/firebase-url';
import { Students } from '../model/students';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    
    constructor(public router:Router){}
    firebaseService = inject(FirebaseService);
    signUp(email: string, password: string): Observable<any> {
        return this.firebaseService.postRequest(signUp, { email, password, 'returnSecureToken': true }, { 'content-type': 'application/json' });
    }
    signIn(email:string,password:string):Observable<any>{
    return this.firebaseService.postRequest(signIn,{email, password, 'returnSecureToken': true}, { 'content-type': 'application/json' });
    }
    addStudent(student: Students): Observable<any> {
        return this.firebaseService.postRequest(`${firebaseUrl}stuents.json`, student, { 'content-type': 'application/json' });
}
}

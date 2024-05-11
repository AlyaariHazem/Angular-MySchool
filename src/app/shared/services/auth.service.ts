import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from './firebase.service';
import { signIn,signUp } from '../../../assets/firebase/firebase-url';
import { Router } from '@angular/router';


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
}

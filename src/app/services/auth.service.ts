import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from './firebase.service';
import { signIn, signUp } from './firebase-url';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    firebaseService = inject(FirebaseService);
    signUp(email: string, password: string): Observable<any> {
        return this.firebaseService.postRequest(signUp, { email, password, 'returnSecureToken': true }, { 'content-type': 'application/json' });
    }
    signIn(email:string,password:string):Observable<any>{
    return this.firebaseService.postRequest(signIn,{email, password, 'returnSecureToken': true}, { 'content-type': 'application/json' });
    }
}

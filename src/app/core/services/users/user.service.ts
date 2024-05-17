import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Users } from '../../../model/users';
import { FirebaseService } from '../firebase.service';
import { firebaseUrl } from '../firebase-url';

// interface UserWithoutId extends Omit<Users, 'id'> {}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  firebaseService = inject(FirebaseService);

  // Get all users from Firebase
  getUsers(): Observable<Array<Users>> {
    return this.firebaseService.getRequest<{ [key: string]: Users }>('users').pipe(
      map(usersObj => {
        const usersArray: Users[] = [];
        for (const key in usersObj) {
          if (usersObj.hasOwnProperty(key)) {
            usersArray.push({ ...usersObj[key], id: key });
          }
        }
        return usersArray;
      })
    );
  }

  // Add a new user to Firebase
  addUser(user: Users): Observable<any> {
    return this.firebaseService.postRequest(`${firebaseUrl}users.json`, user, { 'content-type': 'application/json' });
  }

  // Edit an existing user in Firebase
  editUser(user: Users): Observable<any> {
    const userId = user.id;
    const { id, ...userWithoutId } = user; // Destructure the user to exclude the id
    return this.firebaseService.patchRequest(`${firebaseUrl}users/${userId}.json`, userWithoutId, { 'content-type': 'application/json' });
  }

  // Delete a user from Firebase
  deleteUser(userId: string): Observable<any> {
    return this.firebaseService.deleteRequest(`${firebaseUrl}users/${userId}.json`, { 'content-type': 'application/json' });
  }
}

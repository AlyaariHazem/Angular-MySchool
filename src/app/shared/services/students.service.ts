import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { FirebaseService } from './firebase.service';
import { Students } from '../../students.modul';

@Injectable({
  providedIn: 'root'
})
export class StudentsServicesService {

  firebase=inject(FirebaseService);

  getStudents(): Observable<Array<Students>> {
    return this.firebase.getRequest<Array<Students>>('student').pipe(map(
      (student)=>Object.values(student)
    ));
  }
}

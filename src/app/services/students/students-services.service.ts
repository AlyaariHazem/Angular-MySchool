import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentsServicesService {

  constructor(public http: HttpClient) { }

  getStudents(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      map(res => res)
    );
  }
  addStudent(student: any): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/users', student).pipe(
      map(res => res)
    )
  }
  deleteStudent(id:string | number): Observable<any> {
    return this.http.delete('https://jsonplaceholder.typicode.com/users/'+id).pipe(
      map(res => res)
    )
  }
}

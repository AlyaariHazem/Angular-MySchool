import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Students } from '../../students.modul';

@Component({
  selector: 'app-all-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-students.component.html',
  styleUrl: './all-students.component.scss'
})
export class AllStudentsComponent {



  StudentsInfo: Students[] = [
    {
      id: 1,
      firstName: "حازم",
      lastName: " عبدالله صلاح اليعري",
      email: "Hazemalyaari@gmail.com",
      age: 23,
      phone: 7739840394,
      grade: 100,
      pay: 100,
      allPay: 100,
      still: 100
    },
    {
      id: 2,
      firstName: "فاهم",
      lastName: " عبدالله صلاح اليعري",
      email: "fahem@gmail.com",
      age: 22,
      phone: 23349837,
      grade: 112,
      pay: 100,
      allPay: 100,
      still: 100
    },
    {
      id: 3,
      firstName: "علي",
      lastName: " عبدالله صلاح اليعري",
      email: "ِali@gmail.com",
      age: 6,
      phone: 6349387492,
      grade: 103,
      pay: 100,
      allPay: 100,
      still: 100
    }
  ];

  
  id: Array<number> = [1, 2, 3, 4, 5];


  // @Input() infoStudents: Students[]=[];
  // constructor() {

  // }
  
  
}

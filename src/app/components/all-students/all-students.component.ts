import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Students } from '../../students.modul';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-students',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.scss']
})
export class AllStudentsComponent {
  editingField: string | null = null;

  editStudent(field: string | Students) {
    if (typeof field === 'string') {
      // Double-clicked on a specific field
      this.editingField = this.editingField === field ? null : field;
    } else {
      // Clicked the "Edit" button
      this.editingField = null;
    }
  }
  onInputBlur(fieldName: string) {
    if (this.editingField === fieldName) {
      this.editingField = '';
    }
  }
  StudentsInfo: Students[] = [
    {
      id: 1,
      Name: "حازم عبدالله صلاح اليعري",
      email: "Hazemalyaari@gmail.com",
      age: 23,
      phone: 7739840394,
      grade: 100,
      pay: 100,
      allPay: 100,
      still: 100,
      isEdit: false
    },
    {
      id: 2,
      Name: "فاهم عبدالله صلاح اليعري",
      email: "fahem@gmail.com",
      age: 22,
      phone: 23349837,
      grade: 112,
      pay: 100,
      allPay: 100,
      still: 100,
      isEdit: false
    },
    {
      id: 3,
      Name: "علي عبدالله صلاح اليعري",
      email: "ِali@gmail.com",
      age: 6,
      phone: 6349387492,
      grade: 103,
      pay: 100,
      allPay: 100,
      still: 100,
      isEdit: false
    }
  ];
}
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Students } from '../../../students.modul';
import { FormsModule } from '@angular/forms';
import { StudentsServicesService } from '../../../services/students/students-services.service';

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


  // this will fetch data form the jsonplaceholder  => "users"
  students:Array<Students>=[];
  getStudentsData=inject(StudentsServicesService);
  ngOnInit(): void {

    this.getStudentsData.getStudents().subscribe(res=>{
      this.students=res;
      console.log('these are stuents ',this.students);  
    })
  }
  
}

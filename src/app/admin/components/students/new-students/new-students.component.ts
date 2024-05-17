import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Shared } from '../../../../shared/shared.module';
import { StudentsServicesService } from '../../../../core/services/students/students-services.service';
import {  ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-students',
  standalone: true,
  imports: [Shared],
  templateUrl: './new-students.component.html',
  styleUrl: './new-students.component.scss',
})
export class NewStudentsComponent{
  form: FormGroup;
  name = "info";

  sendNewStudent(): void {
    if (this.form.valid) {
      this.addStudent();
    } else {
      console.log('Form is invalid:', this.form);
      this.toastService.error('ادخل بيانات الطالب بالكامل');
    }
  }

  private studentService=inject(StudentsServicesService);
  private toastService = inject(ToastrService);

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      PlacePD: ['', Validators.required],
      StudentName: ['', Validators.required],
      PirthDate: '',
      LnameE: ["", [Validators.required]],
      TnameE: ["", [Validators.required]],
      SnameE: ["", [Validators.required]],
      fnameE: ["", [Validators.required]],
      Lname: ["", [Validators.required]],
      Tname: ["", [Validators.required]],
      Sname: ["", [Validators.required]],
      fname: ["", [Validators.required]],
      six: "male",
      city: "",
      section: "",
      phone: ["", [Validators.minLength(9)]],
      country: "ye",
      depart: "",
      class: "",
      discriptionJob: "",
      typeJob: "",
      parantJob: "",
      parantType: "father",
      parantEmail: "",
      parantPhone: ['', [Validators.required, Validators.minLength(8)]],
      ParantName: '',
      ParnatContryNum: "",
    });
  }

  private addStudent(): void {
    this.studentService.addStudent(this.form.value).subscribe(() => {
      console.log('you add the student successfully');
      this.toastService.success('تم إضافة الطالب بنجاح');
    })
  }

}

import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../auth/auth.service';
import { Shared } from '../../../../shared/shared.module';
// import {  ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-students',
  standalone: true,
  imports: [Shared],
  templateUrl: './new-students.component.html',
  styleUrl: './new-students.component.scss',
})
export class NewStudentsComponent implements OnInit {
  form: FormGroup;
  name = "info";
  sendNewStudent(): void {
    if (this.form.valid) {
      // this.register();
      this.addStudent();
    } else {
      console.log('Form is invalid:', this.form);
    }
  }

  private authService = inject(AuthService);
  // private toastService = inject(ToastrService);

  register(): void {
    const formValue = this.form.value;
    this.authService.signUp(formValue.parantEmail, formValue.parantPhone).subscribe(res => {
      console.log('Hazem successful to register ', res);
    })
  }
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
    this.authService.addStudent(this.form.value).subscribe(() => {
      console.log('you add the student successfully');
      // this.toastService.success('student added successfully');
    })
  }

  varaible: string = '';
  ngOnInit(): void {

    this.form.get('class')?.valueChanges.subscribe(value => {
      this.varaible = value;
    });
  }

}

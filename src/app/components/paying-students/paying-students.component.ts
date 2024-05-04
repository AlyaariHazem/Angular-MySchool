import { Component } from '@angular/core';
import { SharedModule } from '../sharedComponents/shared.module';
import { NgForm, NgModel } from '@angular/forms';



@Component({
  selector: 'app-paying-students',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './paying-students.component.html',
  styleUrl: './paying-students.component.scss'
})
export class PayingStudentsComponent {

}

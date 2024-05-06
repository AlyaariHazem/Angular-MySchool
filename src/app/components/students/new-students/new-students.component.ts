import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-new-students',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule,MatIconModule],
  templateUrl: './new-students.component.html',
  styleUrl: './new-students.component.scss'
})
export class NewStudentsComponent {

  name="info";
}

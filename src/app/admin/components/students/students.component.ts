import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {

}

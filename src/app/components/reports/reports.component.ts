import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { payment, Students } from '../../students.modul';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {

  StudentsInfo: payment[] = [
    {
      NameStudent: "حازم عبدالله صلاح اليعري",
      Name:"عقد سنة 2024",
      pushName: "قسط رقم 1",
      money:20000,
      wayPush: "كريمي",
      date:"2024/2/2"
    },
    {
      NameStudent: "حازم عبدالله صلاح اليعري",
      Name:"عقد سنة 2027",
      pushName: "قسط رقم 1",
      money:20000,
      wayPush: "كاش",
      date:"2024/2/2"
    },
    {
      NameStudent: "حازم عبدالله صلاح اليعري",
      Name:"عقد سنة 2024",
      pushName: "قسط رقم 1",
      money:20000,
      wayPush: "كاش",
      date:"2024/2/2"
    },
    {
      NameStudent: "حازم عبدالله صلاح اليعري",
      Name:"عقد سنة 2024",
      pushName: "قسط رقم 1",
      money:20000,
      wayPush: "كاش",
      date:"2024/2/2"
    },
  ];
}

import { Component } from '@angular/core';
import { payment } from '../../../paying.modul';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [],
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

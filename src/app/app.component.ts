
import { Component,inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HeaderComponent } from './components/header/header.component';
import { ComponentComponent } from "./components/component/component.component";
import { ReportsComponent } from "./components/reports/reports.component";
import { StudentsComponent } from './components/students/students.component';
import { AllStudentsComponent } from './components/students/all-students/all-students.component';
import { TranslationService } from './services/translation.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, SidebarComponent, HeaderComponent, ComponentComponent, ReportsComponent,
    StudentsComponent,AllStudentsComponent,HttpClientModule
  ]
  , host: {
    '[attr.ngSkipHydration]': 'true'
  }
})
export class AppComponent implements OnInit {
  title = 'Myschool';
  translationService=inject(TranslationService);

  ngOnInit(): void {
    this.translationService.setDefaultLang('ar');
  }

  
  // allstudents: boolean = false;
  // funShowStudents(show: boolean) {
  //   this.allstudents = show;
  // }



  // StudentsInfo: Students[] = [
  //   {
  //     id: 1,
  //     firstName: "حازم",
  //     lastName: " عبدالله صلاح اليعري",
  //     email: "Hazemalyaari@gmail.com",
  //     age: 23,
  //     phone: 7739840394,
  //     grade: 100,
  //     pay: 100,
  //     allPay: 100,
  //     still: 100
  //   },
  //   {
  //     id: 2,
  //     firstName: "فاهم",
  //     lastName: " عبدالله صلاح اليعري",
  //     email: "fahem@gmail.com",
  //     age: 22,
  //     phone: 23349837,
  //     grade: 112,
  //     pay: 100,
  //     allPay: 100,
  //     still: 100
  //   },
  //   {
  //     id: 3,
  //     firstName: "علي",
  //     lastName: " عبدالله صلاح اليعري",
  //     email: "ِali@gmail.com",
  //     age: 6,
  //     phone: 6349387492,
  //     grade: 103,
  //     pay: 100,
  //     allPay: 100,
  //     still: 100
  //   }
  // ];
 

}

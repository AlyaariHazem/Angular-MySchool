
import { Component,inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HeaderComponent } from './admin/components/header/header.component';
import { StudentsComponent } from './admin/components/students/students.component';
import { AllStudentsComponent } from './admin/components/students/all-students/all-students.component';
import { TranslationService } from './core/services/translation.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, HeaderComponent, 
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
 

}

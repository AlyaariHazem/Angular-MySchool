import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { ReportsComponent } from './components/reports/reports.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'reports',component:ReportsComponent},
    {path:'Students',component:AllStudentsComponent},
    {path:'Students/id',component:AllStudentsComponent},
    { path:'menu', component:HeaderComponent},
    {path:'',pathMatch:'full', redirectTo:'/home'},
    { path:'**', component:PageNotFoundComponent},
    
];

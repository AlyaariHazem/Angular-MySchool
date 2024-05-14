import { Routes } from '@angular/router';

import { HeaderComponent } from './admin/components/header/header.component';
import { StudentsComponent } from './admin/components/students/students.component';
import { ReportsComponent } from './admin/components/reports/reports.component';
import { PageNotFoundComponent } from './admin/components/page-not-found/page-not-found.component';
import { HomeComponent } from './admin/components/home/home.component';
import { UsersComponent } from './admin/components/users/users.component';
import { AllStudentsComponent } from './admin/components/students/all-students/all-students.component';
import { NewStudentsComponent } from './admin/components/students/new-students/new-students.component';
import { UpliftStudentsComponent } from './admin/components/students/uplift-students/uplift-students.component';
import { FormComponent } from './admin/components/form/form.component';
import { guardGuard } from './shared/guard/guard.guard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'student',
    loadComponent:()=> import('./admin/components/students/all-students/all-students.component').then(c=>c.AllStudentsComponent) ,
    canActivate:[guardGuard] }, 
    {
        path: 'Students', component: StudentsComponent,
        children: [
            { path: 'allStudents', component: AllStudentsComponent },
            { path: 'newStudent', component: NewStudentsComponent },
            { path: 'uplift', component: UpliftStudentsComponent },
            { path: '',redirectTo:'Students/allStudents',pathMatch:'full'}
        ]
    },
    { path: 'Students/id', component: AllStudentsComponent },
    { path: 'menu', component: HeaderComponent },
    { path: 'user', component: UsersComponent },
    { path: 'paying', component: FormComponent },
    { path: 'text/id', component: UpliftStudentsComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', component: PageNotFoundComponent },

];

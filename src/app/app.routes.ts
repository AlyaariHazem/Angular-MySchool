import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { StudentsComponent } from './components/students/students.component';
import { ReportsComponent } from './components/reports/reports.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ContractComponent } from './components/contract/contract.component';
import { UsersComponent } from './components/users/users.component';
import { AllStudentsComponent } from './components/students/all-students/all-students.component';
import { NewStudentsComponent } from './components/students/new-students/new-students.component';
import { UpliftStudentsComponent } from './components/students/uplift-students/uplift-students.component';
import { FormComponent } from './components/form/form.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'reports', component: ReportsComponent },
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
    { path: 'contract', component: ContractComponent },
    { path: 'text/id', component: UpliftStudentsComponent },
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: '**', component: PageNotFoundComponent },

];

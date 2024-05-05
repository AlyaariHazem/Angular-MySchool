import { Component, inject } from '@angular/core';
import { SharedModule } from '../sharedComponents/shared.module';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';
@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [SharedModule,MatFormFieldModule,MatInputModule,MatIconModule,FormsModule,ReactiveFormsModule
    ,MatRadioModule,MatCardModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule,
    RouterModule,ReactiveFormsModule
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  hidepassword=true;
  hideConformPassword=true;
  
  form:FormGroup=new FormGroup({
    userName:new FormControl('')
  });
  
  
  // private navigationService=inject(NavigationService);
  // navigateToLogin():void{
  //   this.navigationService.navigate
  // }

}

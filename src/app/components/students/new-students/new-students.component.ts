import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder,FormGroup, FormsModule, Validators} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { SharedModule } from '../../sharedComponents/shared.module';
@Component({
  selector: 'app-new-students',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule,MatIconModule,SharedModule],
  templateUrl: './new-students.component.html',
  styleUrl: './new-students.component.scss'
})
export class NewStudentsComponent implements OnInit {

  form: FormGroup;
  name="info";
  constructor(private formBuilder:FormBuilder){
     this.form=this.formBuilder.group({
      PlacePD: ['', Validators.required],
      StudentName: ['', Validators.required],
      PirthDate:'',
      LnameE:["",[Validators.required]],
      TnameE:["",[Validators.required]],
      SnameE:["",[Validators.required]],
      fnameE:["",[Validators.required]],
      Lname: ["",[Validators.required]],
      Tname: ["",[Validators.required]],
      Sname:["",[Validators.required]],
      fname:["",[Validators.required]],
      six: "male",
      city: "",
      section:"",
      phone: ["",[Validators.minLength(9)]],
      country:"ye",
      depart: "",
      class: "",
      discriptionJob: "",
      typeJob: "",
      parantJob:"",
      parantType:"father",
      parantEmail:"",
      parantPhone:['',[Validators.required,Validators.minLength(9)]],
      ParantName:'',
      ParnatContryNum:"",
     }) ;

  }
  varaible:string=''; 
  ngOnInit(): void {

    this.form.get('class')?.valueChanges.subscribe(value=>{
      this.varaible=value;
     });
  }
  //assign value from form to varaible 
  // this.form.get('class')?.valueChanges.subscribe(value=>{
  // this.varaible=value;
  
}

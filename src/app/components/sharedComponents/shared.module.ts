import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

// const components=[];

const modules=[
  FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    TranslateModule,
    ReactiveFormsModule
]

@NgModule({
  // declarations:components,
  imports: modules,
  exports:[
    ...modules
  //  ...components,...modules
  ]
})
export class SharedModule { }
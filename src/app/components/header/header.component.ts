import { CommonModule, NgClass } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, NgClass],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  Appear: boolean = false;
  appear() {
    this.Appear = true;
    this.cancel = false;
  }
  cancel: boolean = true;
  disappear() {
    this.cancel = true;
    this.Appear = false;
  }



  // @Output() showStudents = new EventEmitter<string>();

  // showstudents() {
  //   this.showStudents.emit();
  // }
}
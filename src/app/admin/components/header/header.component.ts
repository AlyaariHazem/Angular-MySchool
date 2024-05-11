import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Shared } from '../../../shared/shared.module';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,Shared, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  toggle:boolean=false;
  open(){
  this.toggle=!this.toggle;
  }

  hidden() {
    this.toggle=false;
  }  

}

import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../sharedComponents/shared.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,SharedModule, NgClass],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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
import { Component } from '@angular/core';

import { Shared } from '../../../shared/shared.module';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [Shared],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  title="المستخدمون";

  login(loginform:any){
  if(loginform.valid){
    const UsersInfo=loginform.value;
    console.log(UsersInfo);
  }
  }
   
 close():void{
  const x= document.getElementById('id01');
  if(x){
    x.style.display='none';
  }
 }
 edit():void{
  const x= document.getElementById('id01');
  if(x){
    x.style.display='block';
  }
 }
 alertDate:Boolean=false;
 alertDelete(){
  this.alertDate=true;
 }
 
}

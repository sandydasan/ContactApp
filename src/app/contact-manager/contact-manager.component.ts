import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { MyContact } from 'src/Model/myContact';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent {

  allContacts:MyContact[]=[]//initailly empty array
  heading='Contact Details'
  url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT08oh9qaMDHFh5ZOKJYb0UizIh3MfHTJ3e9A&usqp=CAU'
//system  current date and time
  loginDate:any

 constructor(private api:ApiService){
  this.loginDate=new Date()
 }

 ngOnInit():void{
  this.api.getAllContacts().subscribe((data:any)=>{
    console.log(data);//array of contacts
    this.allContacts=data
    
  })
 }
}

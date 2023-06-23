import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  
  contactId:string=''//variable creation ,datatype- string, initial value empty string
  contact:any
  groupId:string=''
  groupName:string=''
  constructor(private activatedRoute:ActivatedRoute, private api:ApiService){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      this.contactId=data.contactId
      console.log(this.contactId);

      //api call
      this.api.viewContact(this.contactId).subscribe((data:any)=>{
        console.log(data);
       this.contact=data
      this.groupId=data.groupId
      console.log(this.contact);
      // function api call-group name

      this.api.getGroupName(this.groupId).subscribe((data:any)=>{
        console.log(data);
       this.groupName=data.name
       console.log(this.groupName);
       
        
      })

      })
      
    })
  }

}

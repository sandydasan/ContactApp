import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/Model/myContact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  badeUrl = 'http://localhost:3000/contacts'
  constructor(private http:HttpClient) { }


  //get function for get all contacts

  
  getAllContacts():Observable<MyContact>{
      return this.http.get(this.badeUrl)     
  }

  //Api call for fetch particular contact details
  viewContact(contactId:any){
    return this.http.get(`${this.badeUrl}/${contactId}`)
  }
  getGroupName(groupId:any){
    return this.http.get('http://localhost:3000/group/'+groupId)

  }
}

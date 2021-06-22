import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contact:any=[];
  constructor() { 
    var td=localStorage.getItem("contacts")
    if(td)
    {
      this.contact=JSON.parse(td)
    }
  }
}

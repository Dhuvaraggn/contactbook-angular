import { Component } from '@angular/core';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contact-app';
  storedval:any;
  contactlist:any;
  constructor() {
    let t=localStorage.getItem("contacts")
    if(t)
    {
      this.contactlist=JSON.parse(t)
    }
    else{

    }
  }
  addcontact(contact:any)
  {
    console.log(contact)
    this.storedval=localStorage.getItem("contacts")
    if(this.storedval)
    {
      console.log(JSON.parse(this.storedval))
      let p=JSON.parse(this.storedval)
      p.push(contact)     
      console.log(p)
      localStorage.setItem("contacts",JSON.stringify(p)) 
    }
    else
    {
    localStorage.setItem("contacts",JSON.stringify([contact]))
    }
  }
}

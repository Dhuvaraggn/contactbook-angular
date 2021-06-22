import { Component, Input, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-listcontact',
  templateUrl: './listcontact.component.html',
  styleUrls: ['./listcontact.component.scss']
})
export class ListcontactComponent implements OnInit {

  // @Input() contacts:any;
  contacts:any;
  constructor(private contactservice:ContactService) {
    this.contacts=contactservice.contact
   }

  ngOnInit(): void {
  }

}

import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.scss']
})
export class AddcontactComponent implements OnInit {
  @Output() addtodoemit:any=new EventEmitter()
  @ViewChild('mymodal') mydiv:any;
    todoval:any;
  formgrp:any;formnotes:any;
  contacts:any;
  constructor(private fb:FormBuilder,private contactservice:ContactService) { 
    this.contacts=contactservice.contact
    
  }
 
  ngOnInit(): void {
    this.formgrp=this.fb.group({
      name:this.fb.control('',[Validators.required]),
      contacts:this.fb.array([ this.fb.group({
        phoneno:this.fb.control('',[Validators.required])
      })])
    })
  }
  
 
  addtodo()
  {
     var res=this.formgrp.value
     var ar:Array<string>=[]
     var i=0;
     console.log(res)
     for(i=0;i<res.contacts.length;i++)
     {
      ar.push(res.contacts[i].phoneno)
      console.log(res.contacts[i].phoneno)
     }
     console.log(ar)
      this.todoval={name:res.name,contacts:ar};
      
      this.addtodoemit.emit(this.todoval)
    //    element.formdesc})];}
    console.log(this.contacts)
    this.contactservice.contact.push(this.todoval)
    console.log(this.contactservice.contact)
  }

  createform():FormGroup
  {
  return this.fb.group({
    phoneno:this.fb.control('',[Validators.required])
  })
  }
  addformgrp()
  {
    this.formnotes=this.formgrp.get('contacts') as FormGroup
    const s=this.createform()
    this.formnotes.push(s)
    console.log(this.formgrp)
  }
  
  removeformgrp(f:any)
  {  
    console.log(f)
    console.log(this.formnotes.controls.splice(f,1)   )
  }

  openmodal()
  {
  if(this.mydiv.nativeElement.style.display=="none")
  {
    this.mydiv.nativeElement.style.display="block"
  }
  else
  {
    this.mydiv.nativeElement.style.display="none"
  }
  }
  closemodal()
  {
    this.mydiv.nativeElement.style.display="none"
  }
}

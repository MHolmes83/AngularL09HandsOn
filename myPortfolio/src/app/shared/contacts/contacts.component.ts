import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts!: Contact[];
  dataService: ContactsService  

  constructor(contactsService: ContactsService) { 
    this.dataService = contactsService;
  }

  ngOnInit(){
    this.contacts = this.dataService.contacts;
  }

}

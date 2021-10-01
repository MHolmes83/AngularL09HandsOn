import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts: Contact[] = [
    {
      id: 0,
      firstName: "Alfred",
      lastName: "Planter",
      phoneNumber: "234-345-4567",
      email: "alfredtheplanter@gmail.com"
    },
    {
      id: 1,
      firstName: "Brandon",
      lastName: "Beck",
      phoneNumber: "293-482-2342",
      email: "brandon.beck@yahoo.com",
    },
    {
      id: 2,
      firstName: "Daisy",
      lastName: "Harvey",
      phoneNumber: "839-283-4583",
      email: "daisyharvey@gmail.com"
    },
    {
      id: 3,
      firstName: "Patrick",
      lastName: "Wilson",
      phoneNumber: "283-472-3891",
      email: "patrickwilson@yahoo.com"
    }
  ];
  constructor() { }
}

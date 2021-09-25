import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  items!:Contact [];

  constructor(private contactService: ContactService) { }

  // GET DATA CONTACTS
  ngOnInit(): void {
    this.items = this.contactService.serviceGetItems();

    console.log(this.items);
    
  }

}

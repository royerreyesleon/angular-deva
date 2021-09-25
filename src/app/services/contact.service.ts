import { Injectable } from '@angular/core';
import { Contact } from '../models/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  items!: Contact[];

  constructor() {

    // DATA EXAMPLE
    this.items = [
      {
        name:"Royer Reyes León",
        email:"royerleon7@gmail.com",
        phone:"+9932064490",
        message:"lorem lorem lorem"
      },
      {
        name:"Test Test Test",
        email:"test@test.com",
        phone:"+0123456789",
        message:"lorem lorem lorem"
      }
    ]

  }

  // GET ITEMS
  serviceGetItems(){
    // SI NO EXISTE EN LOCALSTORAGE, MOSTRAR LOS DATOS DEL CONSTRUCTOR.
    if(localStorage.getItem('contact') === null){
      return this.items;
    }else{
      // CONVERTIR DE STRING A JSON.
      this.items = JSON.parse(localStorage.getItem('contact')!);
      return this.items;
    }
  }

  // SAVE DATA
  serviceSaveItem(item:Contact){
    console.log(item);

    this.items.push(item);
    // return false;
    
    let contact : Object[] = [];
    
    if (localStorage.getItem('contact') === null) {
      
      contact = this.items
      // CONVERTIR DE JSON A STRING.
      localStorage.setItem('contact', JSON.stringify(contact));
    }else{
      // CONVERTIR DE STRING A JSON.
      contact = JSON.parse(localStorage.getItem('contact')!);
      contact.push(item);
      localStorage.setItem('contact', JSON.stringify(contact));
    }
    
  }

}

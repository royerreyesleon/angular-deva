import { Injectable } from '@angular/core';
import { Contact } from './models/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }


  save(item:Contact){
    console.log('test');
    
  }
}

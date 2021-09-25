import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  public formContact!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private contactService: ContactService,
              private router:Router) { }

  ngOnInit(): void {

    // VALIDATIONS
    this.formContact = this.formBuilder.group({
      name:[
        '',
        [
          Validators.required,
          Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')
        ]
      ],
      email:[
        '',
         [
           Validators.required,
            Validators.email
        ]
      ],
      phone:[
        '',
        [
          Validators.required,
          Validators.pattern('^\\+[0-9]{10}$')

        ]
      ],
      message:[
        '',
        [
          Validators.required,
          Validators.maxLength(15)
        ]
      ]
    })
  }

  // SEND DATA TO SAVE
  send():any{

    this.contactService.serviceSaveItem(this.formContact.value);
    this.router.navigate(['home']);
    return false;
    
  }


}
